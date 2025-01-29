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

  const toggleMenu = () => {
    document.getElementById('wrapper')?.classList.toggle('toggled');
    document.querySelectorAll('#icon-size').forEach(icon => {
      icon.classList.toggle('icon-sized');
    });
    const botaoMenu = document.getElementById('botao-menu');

    if (botaoMenu) {
      botaoMenu.classList.toggle('toggled');
      const icon = botaoMenu.querySelector('i'); // Seleciona o ícone dentro do botão
      if (icon) {
        icon.classList.toggle('fa-times');
        icon.classList.toggle('fa-bars');
      }
    }

    // Ocultar ou mostrar o texto do menu
    document.querySelectorAll('.menu-text').forEach(text => {
      text.classList.toggle('hidden');
    });
  };

  const getLinkClass = (path: string) => {
    return window.location.pathname === path ? 'active' : '';
  };

  return (
    <div>
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <button className="btn btn-primary" id='botao-menu' type="button" onClick={toggleMenu}>
              <i className="fas fa-times"></i>
            </button>
          </li>
          <li>
            <a href="/" className={getLinkClass('/')}><i className="bi bi-house-fill icon-link" id='icon-size'></i> <span className="menu-text">Início</span></a>
          </li>
          <li>
            <a href="/informacoes" className={getLinkClass('/informacoes')}><i className="bi bi-info-square-fill icon-link" id='icon-size'></i> <span className="menu-text">Informações</span></a>
          </li>
          <li>
            <a href="/downloads" className={getLinkClass('/downloads')}><i className="bi bi-cloud-arrow-down-fill icon-link" id='icon-size'></i> <span className="menu-text">Downloads</span></a>
          </li>
          <li>
            <a href="/wiki" className={getLinkClass('/wiki')}><i className="bi bi-wikipedia icon-link" id='icon-size'></i> <span className="menu-text">Wiki</span></a>
          </li>
          {isLoggedIn && user ? (
            <>
              <li>
                <a href="/account" className={getLinkClass('/account')}><i className="bi bi-person-circle icon-link" id='icon-size'></i> <span className="menu-text">Minha Conta</span></a>
              </li>
              <li>
                <a href="/login" onClick={handleLogout} className={getLinkClass('/login')}><i className="bi bi-box-arrow-in-left icon-link" id='icon-size'></i> <span className="menu-text">Logout</span></a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login" className={getLinkClass('/login')}><i className="bi bi-box-arrow-in-right icon-link" id='icon-size'></i> <span className="menu-text">Login</span></a>
              </li>
              <li>
                <a href="/register" className={getLinkClass('/register')}><i className="bi bi-person-fill-add icon-link" id='icon-size'></i> <span className="menu-text">Nova Conta</span></a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
