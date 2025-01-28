import React from 'react';
import { handleLogout } from './Logout';

const LogoutButton: React.FC = () => {
  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
