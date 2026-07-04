import { useState } from 'react'

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className="navbar">
      <img src="/Lila_Logo_SemFundo.png" alt="Lila Bowls" className="nav-logo" />
      
      <ul className={`nav-links ${menuAberto ? 'aberto' : ''}`}>
        <li><a href="#sobre" onClick={() => setMenuAberto(false)}>Nossa História</a></li>
        <li><a href="#cardapio" onClick={() => setMenuAberto(false)}>Cardápio</a></li>
        <li><a href="#eventos" onClick={() => setMenuAberto(false)}>Eventos</a></li>
        <li><a href="#ebook" onClick={() => setMenuAberto(false)}>Ebook</a></li>
        <li><a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a></li>
      </ul>

      <button 
        className="menu-hamburguer"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? '✕' : '☰'}
      </button>
    </nav>
  )
}

export default Navbar