import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Secretaria = () => {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAluno, setSelectedAluno] = useState(null);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token não encontrado. Faça login.');
        }

        const response = await axios.get('https://4036-177-51-170-231.ngrok-free.app/alunos/listar', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAlunos(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlunos();
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
          <li key={aluno.id} onClick={() => handleAlunoClick(aluno)}>
            {aluno.nomeCompleto}
          </li>
        ))}
      </ul>

      {selectedAluno && (
        <div>
          <h3>Detalhes do Aluno</h3>
          <p><strong>Nome Completo:</strong> {selectedAluno.nomeCompleto}</p>
          <p><strong>Email:</strong> {selectedAluno.email}</p>
          <p><strong>Telefone:</strong> {selectedAluno.telefone}</p>
          <p><strong>Escolaridade:</strong> {selectedAluno.escolaridade}</p>
          <p><strong>RG:</strong> {selectedAluno.documentos?.rg}</p>
          <p><strong>CPF:</strong> {selectedAluno.documentos?.cpf}</p>
        </div>
      )}
    </div>
  );
};

export default Secretaria;
