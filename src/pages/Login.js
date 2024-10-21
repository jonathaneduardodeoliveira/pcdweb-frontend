import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/alunos/login', { email, senha });
      localStorage.setItem('token', response.data.token);
      alert('Login realizado com sucesso!');

      const { papel } = jwtDecode(response.data.token);
      if (papel === 'secretaria') {
        navigate('/secretaria');
      } else {
        navigate('/escolha-curso');
      }
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input 
        name="email" 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        name="senha" 
        type="password" 
        placeholder="Senha"
        value={senha} 
        onChange={(e) => setSenha(e.target.value)} 
        required 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
