import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Account from './pages/Account';
import App from './App';
import { createRoot } from 'react-dom/client';
import Menu from './components/Menu';

// Selecione o elemento raiz do seu aplicativo
const container = document.getElementById('root');

// Crie uma raiz (root) e renderize o aplicativo
if (container) {
  const root = createRoot(container);
  root.render(
    <Router>
      <Menu items={[]} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

