export const handleLogout = () => {
  // Lógica de logout aqui
  localStorage.removeItem('token');
  window.location.href = '/login';
};