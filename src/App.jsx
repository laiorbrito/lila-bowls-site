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
import OndaDivisoria from './OndaDivisoria'



function App() {
  useScrollAnimation()
  return (
    
    <div>
      <Navbar />
      <Hero />
      <OndaDivisoria corTopo="#3d9688" corBaixo="#f5ede3" />
      <Sobre />
      <OndaDivisoria corTopo="#f5ede3" corBaixo="#3d9688" />
      <Cardapio />
      <OndaDivisoria corTopo="#3d9688" corBaixo="#f5ede3" />
      <EmBreve />
      <OndaDivisoria corTopo="#f5ede3" corBaixo="#ffffff" />
      <Eventos />
      <OndaDivisoria corTopo="#ffffff" corBaixo="#1a5c45" />
      <Ebook />
      <OndaDivisoria corTopo="#1a5c45" corBaixo="#f5ede3" />
      <Contato />
      <OndaDivisoria corTopo="#f5ede3" corBaixo="#1a5c45" />
      <Footer />
    </div>
  )
}

export default App