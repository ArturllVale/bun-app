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
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="login-container">
          <h2 className='pt-4'>Login</h2>
          <div className="login-box mt-5" data-aos="flip-up">
            {error && <p className="alert alert-warning">{error}</p>}
            <div className="input-group">
              <label>Usuário:</label>
              <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Senha:</label>
              <input type="password" value={user_pass} onChange={(e) => setUserPass(e.target.value)} />
            </div>
            <button className="login-button" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
