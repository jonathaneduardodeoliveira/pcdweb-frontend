
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Importação ajustada

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://4036-177-51-170-231.ngrok-free.app/alunos/login', { email, senha });
      localStorage.setItem('token', response.data.token);
      alert('Login realizado com sucesso!');

      const { papel } = jwtDecode(response.data.token);
      if (papel === 'secretaria') {
        navigate('/listar-alunos');
      } else {
        navigate('/escolha-curso');
      }

      // Limpar os campos após o login
      setEmail('');
      setSenha('');

    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Erro ao fazer login. Tente novamente.';
      alert(errorMessage);
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
