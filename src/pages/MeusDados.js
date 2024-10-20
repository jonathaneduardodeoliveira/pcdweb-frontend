import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MeusDados = () => {
  const [dadosAluno, setDadosAluno] = useState(null);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://eb6c-177-51-170-231.ngrok-free.app/alunos/meus-dados', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDadosAluno(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do aluno:', error);
      }
    };

    fetchDados();
  }, []);

  if (!dadosAluno) {
    return <div>Carregando dados...</div>;
  }

  return (
    <div>
      <h2>Meus Dados</h2>
      <p><strong>Nome Completo:</strong> {dadosAluno.nomeCompleto}</p>
      <p><strong>Email:</strong> {dadosAluno.email}</p>
      <p><strong>Telefone:</strong> {dadosAluno.telefone}</p>
      <p><strong>Escolaridade:</strong> {dadosAluno.escolaridade}</p>
      {/* Adicione outros campos aqui */}
    </div>
  );
};

export default MeusDados;
