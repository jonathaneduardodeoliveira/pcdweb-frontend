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
            <h1>Escolha o seu Curso</h1> {/* Título principal da página */}
            <button onClick={buscarCurso}>Buscar Curso</button>

            <div style={{ margin: '20px 0' }}>
                <h2>Cursos Relacionados à Informática</h2> {/* Seção relacionada à informática */}
                <ul>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/bootcamp-engenharia-de-software-turma-03-04-e-05-prof-moab-macena/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Bootcamp Engenharia de Software
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/modulo-csharp-turma-05-prof-luan-goncalves/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Módulo Csharp – turma 05
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/modulo-front-end-turma-03-04-e-05-profs-jose-vinicius-e-lucas-santos/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Módulo Front-end
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/curso-de-power-bi/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Curso de Power BI
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/excel-dashboards/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Excel – Dashboards
                            </a>
                        </h3>
                    </li>
                </ul>

                <h2>Outros Cursos</h2> {/* Seção para outros cursos */}
                <ul>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/curso-de-assistente-administrativo/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Curso de Assistente Administrativo
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/curso-de-copywriting-basico/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Curso de Copywriting Básico
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/curso-de-design-basico/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Curso de Design Básico
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/curso-de-ingles-para-iniciantes/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Curso de Inglês para Iniciantes
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/curso-de-investimentos/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Curso de Investimentos
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/curso-de-marketing-digital/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Curso de Marketing Digital
                            </a>
                        </h3>
                    </li>
                    <li>
                        <h3>
                            <a 
                                href="https://ead.devstars.tech/cursos/recrutamento-e-selecao/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                                Recrutamento e Seleção
                            </a>
                        </h3>
                    </li>
                </ul>
            </div>
            <button onClick={listarDados}>Listar seus Dados Cadastrados</button>
        </div>
    );
};

export default EscolhaCurso;
