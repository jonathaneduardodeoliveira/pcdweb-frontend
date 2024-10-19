import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import EscolhaCurso from './pages/EscolhaCurso';
import AlunosList from './components/AlunosList';
import MeusDados from './pages/MeusDados';
import Secretaria from './pages/Secretaria';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>PCDWeb</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/cadastro">Cadastro</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/escolha-curso" element={<EscolhaCurso />} />
            <Route path="/alunos" element={<AlunosList />} />
            <Route path="/meus-dados" element={<MeusDados />} />
            <Route path="/secretaria" element={<Secretaria />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer>
          <p>© 2024 PCDWeb - Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Bem-vindo ao PCDWeb</h2>
      <p>Facilitando a gestão de alunos e cursos com acessibilidade para todos.</p>
      <div className="actions">
        <Link to="/cadastro" className="button">Cadastrar-se</Link>
        <Link to="/login" className="button">Login</Link>
      </div>
    </div>
  );
}

export default App;
