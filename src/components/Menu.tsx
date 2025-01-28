/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { handleLogout } from './Logout';

interface MenuProps {
  items: string[];
}

const Menu: React.FC<MenuProps> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ userid: string } | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    // Verifica se o usuário está logado e obtém o nome do usuário
    updateLoginStatus();
  }, []);

  useEffect(() => {
    // Adiciona um listener para mudanças no localStorage
    window.addEventListener('storage', updateLoginStatus);
    return () => {
      window.removeEventListener('storage', updateLoginStatus);
    };
  }, []);

  const handleNavButtonClick = (index: number) => {
    setActiveIndex(index);
    const navToggle = document.getElementById('nav-toggle') as HTMLInputElement;
    if (navToggle) {
      navToggle.checked = false;
    }
  };

  return (
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <a id="nav-title" href="https://codepen.io" target="_blank">
          C<i className="fab fa-codepen" />
          DEPEN
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger" />
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <a className={`nav-button ${activeIndex === 0 ? 'active' : ''}`} href="/" onClick={() => handleNavButtonClick(0)}>
          <i className="fas fa-home" />
          <span>Início</span>
        </a>
        <a className={`nav-button ${activeIndex === 1 ? 'active' : ''}`} href="/informacoes" onClick={() => handleNavButtonClick(1)}>
          <i className="fas fa-file-lines" />
          <span>Informações</span>
        </a>
        <a className={`nav-button ${activeIndex === 2 ? 'active' : ''}`} href="/downloads" onClick={() => handleNavButtonClick(2)}>
          <i className="fas fa-download" />
          <span>Downloads</span>
        </a>
        <a className={`nav-button ${activeIndex === 3 ? 'active' : ''}`} href="/wiki" onClick={() => handleNavButtonClick(3)}>
          <i className="fas fa-file-circle-question" />
          <span>Wiki</span>
        </a>
        <hr />
        {isLoggedIn && user ? (
          <>
            <a className={`nav-button ${activeIndex === 4 ? 'active' : ''}`} href="/account" onClick={() => handleNavButtonClick(4)}>
              <i className="fas fa-user" />
              <span>Minha Conta</span>
            </a>
            <a className="nav-button" href="#" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt" />
              <span>Logout</span>
            </a>
          </>
        ) : (
          <>
            <a className={`nav-button ${activeIndex === 5 ? 'active' : ''}`} href="/login" onClick={() => handleNavButtonClick(5)}>
              <i className="fas fa-sign-in-alt" />
              <span>Login</span>
            </a>
            <a className={`nav-button ${activeIndex === 6 ? 'active' : ''}`} href="/nova-conta" onClick={() => handleNavButtonClick(6)}>
              <i className="fas fa-user-plus" />
              <span>Nova Conta</span>
            </a>
          </>
        )}
        <div id="nav-content-highlight" style={{ '--active-index': activeIndex } as React.CSSProperties} />
      </div>
      {isLoggedIn && user && (
        <div id="nav-footer">
          <div id="nav-footer-heading">
            <div id="nav-footer-avatar">
              <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
            </div>
            <div id="nav-footer-titlebox">
              <p className='nome-user'>{user.userid}</p>
              <span id="nav-footer-subtitle">VIP</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
