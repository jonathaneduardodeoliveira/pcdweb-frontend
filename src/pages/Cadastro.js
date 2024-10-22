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
    cidDeficiencia: '',
    codigo: '',
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    uf: '',
    numero: '',
    complemento: ''
  });

  const [isAddressFetched, setIsAddressFetched] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/alunos/cadastrar', {
        nomeCompleto: formData.nomeCompleto,
        email: formData.email,
        telefone: formData.telefone,
        escolaridade: formData.escolaridade,
        documentos: {
          rg: formData.rg,
          cpf: formData.cpf,
          cidDeficiencia: formData.cidDeficiencia
        },
        senha: formData.senha,
        codigo: formData.codigo,
        endereco: {
          cep: formData.cep,
          logradouro: formData.logradouro,
          bairro: formData.bairro,
          cidade: formData.cidade,
          uf: formData.uf,
          numero: formData.numero,
          complemento: formData.complemento
        }
      });
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar: ' + error.message);
    }
  };

  const handleCepBlur = async () => {
    const cep = formData.cep.replace(/\D/g, '');

    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;

        if (data.erro) {
          alert('CEP não encontrado.');
          return;
        }

        setFormData({
          ...formData,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf
        });
        setIsAddressFetched(true);
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    } else {
      alert('CEP inválido.');
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
      <input name="cidDeficiencia" placeholder="CID da Deficiência" onChange={handleChange} required />
      <input name="senha" type="password" placeholder="Senha" onChange={handleChange} required />
      <input name="codigo" placeholder="Código da Secretaria (Opcional)" onChange={handleChange} />

      <h3>Endereço</h3>
      <input
        name="cep"
        placeholder="CEP"
        value={formData.cep}
        onChange={handleChange}
        onBlur={handleCepBlur}
        required
      />
      <button type="button" onClick={handleCepBlur}>Buscar Endereço</button>
      {isAddressFetched && (
        <>
          <input name="bairro" placeholder="Bairro" value={formData.bairro} disabled />
          <input name="logradouro" placeholder="Rua" value={formData.logradouro} disabled />
          <input name="cidade" placeholder="Cidade" value={formData.cidade} disabled />
          <input name="uf" placeholder="UF" value={formData.uf} disabled />
        </>
      )}
      <input name="numero" placeholder="Número" value={formData.numero} onChange={handleChange} required />
      <input name="complemento" placeholder="Complemento" value={formData.complemento} onChange={handleChange} />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;
