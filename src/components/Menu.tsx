/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { handleLogout } from './Logout';

const Menu: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ userid: string } | null>(null);

  const updateLoginStatus = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
      setUser(null);
      return;
    }

    try {
      const response = await axios.get('http://localhost:3000/minha-conta', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoggedIn(true);
      setUser(response.data.user);
    } catch (error) {
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  useEffect(() => {
    updateLoginStatus();
  }, []);

  useEffect(() => {
    window.addEventListener('storage', updateLoginStatus);
    return () => {
      window.removeEventListener('storage', updateLoginStatus);
    };
  }, []);

  return (
    <>
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
        Menu
      </button>
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <a className="nav-link" href="/">Início</a>
          <a className="nav-link" href="/informacoes">Informações</a>
          <a className="nav-link" href="/downloads">Downloads</a>
          <a className="nav-link" href="/wiki">Wiki</a>
          {isLoggedIn && user ? (
            <>
              <a className="nav-link" href="/account">Minha Conta</a>
              <a className="nav-link" href="/login" onClick={handleLogout}>Logout</a>
            </>
          ) : (
            <>
              <a className="nav-link" href="/login">Login</a>
              <a className="nav-link" href="/nova-conta">Nova Conta</a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
