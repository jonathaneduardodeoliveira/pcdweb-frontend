import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AlunosList.css';

const AlunosList = () => {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAluno, setSelectedAluno] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Tentando buscar a lista de alunos');
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token não encontrado. Faça login.');
        }

        const response = await axios.get('http://localhost:3000/alunos/listar', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Alunos encontrados:', response.data);
        setAlunos(response.data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAlunoClick = (aluno) => {
    setSelectedAluno(aluno);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar lista de alunos: {error}</div>;
  }

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id} className="aluno-item" onClick={() => handleAlunoClick(aluno)}>
            {aluno.nomeCompleto}
          </li>
        ))}
      </ul>

      {selectedAluno && (
        <div className="aluno-details">
          <h3>Detalhes do Aluno</h3>
          <strong>Nome Completo:</strong> {selectedAluno.nomeCompleto} <br />
          <strong>Email:</strong> {selectedAluno.email} <br />
          <strong>Telefone:</strong> {selectedAluno.telefone} <br />
          <strong>Escolaridade:</strong> {selectedAluno.escolaridade} <br />
          <strong>Documentos:</strong>
          <ul>
            <li><strong>RG:</strong> {selectedAluno.documentos?.rg}</li>
            <li><strong>CPF:</strong> {selectedAluno.documentos?.cpf}</li>
            <li><strong>Comprovante de Endereço:</strong> {selectedAluno.documentos?.comprovanteEndereco}</li>
            <li><strong>Laudo Médico:</strong> {selectedAluno.documentos?.laudoMedico}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AlunosList;
