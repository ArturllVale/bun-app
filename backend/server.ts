// Importação das bibliotecas necessárias
import express, { Request, Response } from 'express';
import { RequestHandler } from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import { body, validationResult } from 'express-validator';
import cors from 'cors';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const host = process.env.HOST;
const database = process.env.DATABASE;

console.log(`Connecting to database: ${database} at ${host}`);

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Teste de conexão com o banco de dados
db.query('SELECT 1', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota de login
app.post('/login', (req, res) => {
  const { userid, user_pass } = req.body;
  const query = 'SELECT * FROM login WHERE userid = ?';
  db.query(query, [userid], (err, results: mysql.RowDataPacket[]) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }
    const user = results[0];
    if (user.user_pass !== user_pass) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in the .env file');
    }
    const token = jwt.sign({ id: user.account_id, userid: user.userid }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.json({ token });
  });
});

// Handler para a rota protegida
const minhaContaHandler: RequestHandler = (req: Request, res: Response): void => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Token não fornecido' });
    return;
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in the .env file');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: 'Bem-vindo à sua conta!', user: decoded });
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      res.status(401).json({ error: 'Token expirado' });
    } else {
      console.error('Erro ao verificar token:', err);
      res.status(401).json({ error: 'Token inválido ou expirado' });
    }
  }
};

// Definição da rota protegida
app.get('/minha-conta', minhaContaHandler);

// Rota de registro com validação usando express-validator
app.post(
  '/api/register',
  [
    // Validação dos campos de entrada
    body('userid').notEmpty().withMessage('User ID é obrigatório'),
    body('user_pass')
      .isLength({ min: 8 })
      .withMessage('A senha deve ter pelo menos 8 caracteres')
      .matches(/[a-zA-Z]/)
      .withMessage('A senha deve conter letras')
      .matches(/[0-9]/)
      .withMessage('A senha deve conter números'),
    body('email').isEmail().withMessage('Email inválido'),
    body('sex').isIn(['M', 'F', 'S']).withMessage('Sexo deve ser M, F ou S'),
  ],
  async (req, res) => {
    // Verifica se há erros de validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Erros de validação:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { userid, user_pass, email, sex } = req.body;
    console.log('Dados recebidos para registro:', { userid, user_pass, email, sex });

    try {
      // Verifica se o usuário ou email já estão registrados
      const checkUserQuery = 'SELECT * FROM login WHERE userid = ? OR email = ?';
      const [results] = await db.promise().query<mysql.RowDataPacket[]>(checkUserQuery, [userid, email]);

      if (results.length > 0) {
        console.log('Usuário ou Email já registrados:', results);
        return res.status(400).json({ error: 'Usuário ou Email já Registrados!' });
      }

      // Insere o novo usuário no banco de dados (sem bcrypt)
      const insertQuery = 'INSERT INTO login (userid, user_pass, email, sex) VALUES (?, ?, ?, ?)';
      await db.promise().query(insertQuery, [userid, user_pass, email, sex]);

      return res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (err) {
      console.error('Erro ao registrar o usuário:', err);
      return res.status(500).json({ error: 'Erro ao registrar o usuário!' });
    }
  }
);

// Rota GET para informar que o método correto é POST
app.get('/api/register', (req, res) => {
  res.send('Use POST para registrar um novo usuário.');
});

// Porta em que o servidor estará rodando
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
