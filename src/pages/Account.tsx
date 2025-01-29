
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoutButton from '../components/LogoutButton';

const Account: React.FC = () => {
  const [user, setUser] = useState<{ userid: string } | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }

    axios.get('http://localhost:3000/minha-conta', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(() => {
        setError('Erro ao acessar a conta. Verifique suas credenciais.');
        localStorage.removeItem('token');
        window.location.href = '/login';
      });
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!user) {
    return <p>Carregando...</p>;
  }

  return (
    <div className='container'>
      <h2>Minha Conta</h2>
      <p>Bem-vindo, {user?.userid}!</p>
      <LogoutButton />
    </div>
  );
};

export default Account;
