/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom'; // Importe Link e useLocation
import { handleLogout } from './Logout';

const Menu: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ userid: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Estado para verificar se está carregando

  const location = useLocation(); // Monitora o caminho atual da rota

  // Função para verificar o status de login
  const updateLoginStatus = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
      setUser(null);
      setIsLoading(false); // Atualiza o estado de carregamento
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
    } finally {
      setIsLoading(false); // Atualiza o estado de carregamento
    }
  };

  // Verifica o status de login ao montar o componente
  useEffect(() => {
    updateLoginStatus();
  }, []);

  // Monitora mudanças no localStorage para atualizar o status de login
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'token') {
        updateLoginStatus();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Função para determinar a classe CSS do link ativo
  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  // Não renderiza nada enquanto está carregando
  if (isLoading) {
    return null;
  }

  return (
    <div>
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand text-white">MeuRO</li>
          <hr />
          <li>
            <Link to="/" className={getLinkClass('/')}>
              <i className="bi bi-house-fill icon-link" id="icon-size"></i>
              <span className="menu-text">Início</span>
            </Link>
          </li>
          <li>
            <Link to="/informacoes" className={getLinkClass('/informacoes')}>
              <i className="bi bi-info-square-fill icon-link" id="icon-size"></i>
              <span className="menu-text">Informações</span>
            </Link>
          </li>
          <li>
            <Link to="/downloads" className={getLinkClass('/downloads')}>
              <i className="bi bi-cloud-arrow-down-fill icon-link" id="icon-size"></i>
              <span className="menu-text">Downloads</span>
            </Link>
          </li>
          <li>
            <Link to="/wiki" className={getLinkClass('/wiki')}>
              <i className="bi bi-wikipedia icon-link" id="icon-size"></i>
              <span className="menu-text">Wiki</span>
            </Link>
          </li>
          <hr className="linha" />
          {isLoggedIn && user ? (
            <>
              <li>
                <Link to="/account" className={getLinkClass('/account')}>
                  <i className="bi bi-person-circle icon-link" id="icon-size"></i>
                  <span className="menu-text">Minha Conta</span>
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={handleLogout} className={getLinkClass('/login')}>
                  <i className="bi bi-box-arrow-in-left icon-link" id="icon-size"></i>
                  <span className="menu-text">Logout</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className={getLinkClass('/login')}>
                  <i className="bi bi-box-arrow-in-right icon-link" id="icon-size"></i>
                  <span className="menu-text">Login</span>
                </Link>
              </li>
              <li>
                <Link to="/register" className={getLinkClass('/register')}>
                  <i className="bi bi-person-fill-add icon-link" id="icon-size"></i>
                  <span className="menu-text">Nova Conta</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
