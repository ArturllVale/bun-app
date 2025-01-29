/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [user_pass, setUserPass] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { userid, user_pass });
      const token = response.data.token;
      localStorage.setItem('token', token);
      window.location.href = '/account';
    } catch (err) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label>Usuário</label>
          <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Senha:</label>
          <input type="password" value={user_pass} onChange={(e) => setUserPass(e.target.value)} />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
