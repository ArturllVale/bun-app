import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('M'); // Valor padrão ajustado
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não são iguais');
      return;
    }
    if (!acceptTerms) {
      alert('Você deve aceitar os termos de registro primeiro!');
      return;
    }
    if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      alert('A senha deve ter pelo menos 8 caracteres e incluir letras e números');
      return;
    }
    try {
      console.log('Enviando dados para registro:', { userid, password, email, gender });
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid,
          user_pass: password,
          email,
          sex: gender,
        }),
      });
      if (response.ok) {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate('/login');
        }, 3000);
      } else {
        const data = await response.json();
        alert(data.error || 'Falha no registro');
      }
    } catch (error) {
      console.error('Erro durante o registro:', error);
      alert('Ocorreu um erro durante o registro');
    }
  };

  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col-md-6">
          <h2 className="mb-3">Criar uma nova conta</h2>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="mb-2">
              <label className="form-label">Usuário:</label>
              <input
                type="text"
                className="form-control"
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Senha:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Confirmar Senha:</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Sexo:</label>
              <select
                className="form-select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="S">Outros</option>
              </select>
            </div>
            <div className="mb-2 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                required
              />
              <label className="form-check-label">Aceito os termos de registro</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Criar Nova Conta</button>
          </form>
          {showPopup && (
            <div className="popup">
              <p>Registro bem-sucedido! Redirecionando para o login...</p>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Termos de Registro</h2>
          <ul className='list-group py-4'>
            <li className='list-group-item list-group-item-warning'>
              <i className="bi bi-exclamation-diamond-fill"></i> O usuário e senha devem conter ao menos 8 caracteres.
            </li>
            <li className='list-group-item list-group-item-warning'>
              <i className="bi bi-exclamation-diamond-fill"></i> A senha deve conter letras e números.
            </li>
            <li className='list-group-item list-group-item-warning'>
              <i className="bi bi-exclamation-diamond-fill"></i> Digite um Email válido para poder deletar personagens.
            </li>
            <li className='list-group-item list-group-item-danger'>
              <i className="bi bi-x-octagon-fill"></i> É Proibido a divulgação de outros servidores. (Ban por IP)
            </li>
            <li className='list-group-item list-group-item-danger'>
              <i className="bi bi-x-octagon-fill"></i> É Proibido o uso de Macros ou Utilitários Externos.
            </li>
            <li className='list-group-item list-group-item-danger'>
              <i className="bi bi-x-octagon-fill"></i> É Proibido Dual Cliente.
            </li>
            <li className='list-group-item list-group-item-danger'>
              <i className="bi bi-x-octagon-fill"></i> É Proibido RMT fora do sistema.
            </li>
            <li className='list-group-item list-group-item-success'>
              <i className="bi bi-check-circle-fill"></i> Seja gentil e respeitoso com os outros.
            </li>
            <li className='list-group-item list-group-item-success'>
              <i className="bi bi-check-circle-fill"></i> Tire suas dúvidas no nosso Discord.
            </li>
            <li className='list-group-item list-group-item-success'>
              <i className="bi bi-check-circle-fill"></i> Faça novas amizades e explore conteúdos inéditos.
            </li>
            <li className='list-group-item list-group-item-success'>
              <i className="bi bi-check-circle-fill"></i> Consulte nosso guia para iniciar bem no servidor.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;
