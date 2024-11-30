import React, { useState } from 'react';
import api from './api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', { username, password });
      alert('Usuario registrado con éxito');
    } catch (error) {
      alert('Error al registrar: ' + error.response.data);
    }
  };

  return (
    <div className="continer-form">
    <form onSubmit={handleSubmit} className="row g-3 needs-validation form-media form-login-register">
      <h2>Registro</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="form-control form-control-log-reg"/>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="form-control form-control-log-reg"/>
      <button type="submit" className='btn btn-primary form-control-mod boton'>Registrar</button>
    </form>
    </div>
  );
};

export default Register;