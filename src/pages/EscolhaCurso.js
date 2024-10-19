import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EscolhaCurso = () => {
    const navigate = useNavigate();
    
    // Estado para armazenar a lista de cursos
    const [cursos] = useState([
        { id: 1, nome: 'Bootcamp Engenharia de Software', url: 'https://ead.devstars.tech/cursos/bootcamp-engenharia-de-software-turma-03-04-e-05-prof-moab-macena/' },
        { id: 2, nome: 'Curso de Assistente Administrativo', url: 'https://ead.devstars.tech/cursos/curso-de-assistente-administrativo/' },
        { id: 3, nome: 'Curso de Copywriting Básico', url: 'https://ead.devstars.tech/cursos/curso-de-copywriting-basico/' },
        { id: 4, nome: 'Curso de Design Básico', url: 'https://ead.devstars.tech/cursos/curso-de-design-basico/' },
        { id: 5, nome: 'Curso de Inglês para Iniciantes', url: 'https://ead.devstars.tech/cursos/curso-de-ingles-para-iniciantes/' },
        { id: 6, nome: 'Curso de Investimentos', url: 'https://ead.devstars.tech/cursos/curso-de-investimentos/' },
        { id: 7, nome: 'Curso de Marketing Digital', url: 'https://ead.devstars.tech/cursos/curso-de-marketing-digital/' },
        { id: 8, nome: 'Curso de Power BI', url: 'https://ead.devstars.tech/cursos/curso-de-power-bi/' },
        { id: 9, nome: 'Excel – Dashboards', url: 'https://ead.devstars.tech/cursos/excel-dashboards/' },
        { id: 10, nome: 'Módulo Csharp – turma 05', url: 'https://ead.devstars.tech/cursos/modulo-csharp-turma-05-prof-luan-goncalves/' },
        { id: 11, nome: 'Módulo Front-end', url: 'https://ead.devstars.tech/cursos/modulo-front-end-turma-03-04-e-05-profs-jose-vinicius-e-lucas-santos/' },
        { id: 12, nome: 'Recrutamento e Seleção', url: 'https://ead.devstars.tech/cursos/recrutamento-e-selecao/' },
    ]);

    const listarDados = () => {
        navigate('/meus-dados');
    };

    const buscarCurso = () => {
        console.log('Buscar curso');
        // Aqui você pode adicionar a lógica para buscar um curso específico, se necessário
    };

    return (
        <div>
            <h2>Escolha o seu Curso</h2>
            <button onClick={buscarCurso}>Buscar Curso</button>
            <div style={{ margin: '20px 0' }}>
                <h3>Cursos Disponíveis:</h3>
                <ul>
                    {cursos.map(curso => (
                        <li key={curso.id}>
                            <a 
                                href={curso.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }} // Estilo do link
                            >
                                {curso.nome}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={listarDados}>Listar seus Dados Cadastrados</button>
        </div>
    );
};

export default EscolhaCurso;
