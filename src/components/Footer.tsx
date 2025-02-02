import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer fixed-bottom">
        <div className="row">
          <div className="col">
            <p>&copy; 2023 Seu Nome. Todos os direitos reservados.</p>
          </div>
          <div className="col">
            <ul className="footer-links">
              <li><a href="/">Início</a></li>
              <li><a href="/info">Informações</a></li>
              <li><a href="/downloads">Downloads</a></li>
              <li><a href="/account">Conta</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
