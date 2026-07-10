import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import Hero from './Hero'
import Sobre from './Sobre'
import Cardapio from './Cardapio'
import EmBreve from './EmBreve'
import Eventos from './Eventos'
import Ebook from './Ebook'
import Contato from './Contato'



function App() {
  useScrollAnimation()
  return (
    
    <div>
      <Navbar />
      <Hero />
      <Sobre />
      <Cardapio />
      <EmBreve />
      <Eventos />
      <Ebook />
      <Contato />
      <Footer />
    </div>
  )
}

export default App