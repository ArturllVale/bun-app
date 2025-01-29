/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
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
      alert('Você deve acessar os termos de registro primeiro!');
      return;
    }

    if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      alert('Password must be at least 8 characters long and include letters and numbers');
      return;
    }

    try {
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
      alert('Ocorreu um erro durante o registro');
    }
  };

  return (
    <div className="register-container">
      <h2 className="text-center mb-4">Nova conta</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="mb-3">
          <label className="form-label">Usuário:</label>
          <input
            type="text"
            className="form-control"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirmar Senha:</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
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
        <div className="mb-3 form-check">
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
  );
};

export default Register;
