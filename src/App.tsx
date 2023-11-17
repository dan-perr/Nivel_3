import React from 'react';
import './App.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link to='/' className='navbar-brand custom-space'>Catálogo</Link>
          <Link to='/dados' className='navbar-brand'>Novo</Link>
        </nav>
        <main className='container'>
          <Routes>
            <Route path='/' element={<LivroLista />} />
            <Route path='/dados' element={<LivroDados />} />
            {/* Se necessário, adicionar mais rotas aqui */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;