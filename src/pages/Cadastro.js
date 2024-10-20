import React, { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    escolaridade: '',
    senha: '',
    rg: '',
    cpf: '',
    comprovanteEndereco: '',
    cidDeficiencia: '',
    codigo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://4036-177-51-170-231.ngrok-free.app/alunos/cadastrar', {
        nomeCompleto: formData.nomeCompleto,
        email: formData.email,
        telefone: formData.telefone,
        escolaridade: formData.escolaridade,
        documentos: {
          rg: formData.rg,
          cpf: formData.cpf,
          comprovanteEndereco: formData.comprovanteEndereco,
          cidDeficiencia: formData.cidDeficiencia
        },
        senha: formData.senha,
        codigo: formData.codigo
      });
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Aluno ou Colaborador</h2>
      <input name="nomeCompleto" placeholder="Nome Completo" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="telefone" placeholder="Telefone" onChange={handleChange} required />
      <input name="escolaridade" placeholder="Escolaridade" onChange={handleChange} required />
      <input name="rg" placeholder="RG" onChange={handleChange} required />
      <input name="cpf" placeholder="CPF" onChange={handleChange} required />
      <input name="comprovanteEndereco" placeholder="Comprovante de Endereço" onChange={handleChange} required />
      <input name="cidDeficiencia" placeholder="CID da Deficiência" onChange={handleChange} required />
      <input name="senha" type="password" placeholder="Senha" onChange={handleChange} required />
      <input name="codigo" placeholder="Código da Secretaria (Opcional)" onChange={handleChange} />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;
