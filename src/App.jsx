import './App.css'

function App() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <h1>Lila Bowls</h1>
        <p className="slogan">A escolha que faz bem</p>
        <a href="https://www.ifood.com.br" target="_blank" className="btn-primary">
          Pedir no iFood
        </a>
      </section>

      {/* Sobre */}
      <section className="sobre">
        <h2>Nossa História</h2>
        <p>Há 10 anos em Botafogo, a Lila Bowls nasceu da vontade de oferecer uma alimentação saborosa, nutritiva e acessível no coração do Rio de Janeiro. Cada bowl é montado com carinho e ingredientes frescos, para que cada refeição seja uma escolha que faz bem.</p>
      </section>

      {/* Cardápio */}
      <section className="cardapio">
        <h2>Nosso Cardápio</h2>
        <p>Disponível pelo iFood para toda a Zona Sul</p>
      </section>

      {/* Eventos */}
      <section className="eventos">
        <h2>Eventos & Casamentos</h2>
        <p>Levamos nossa estação de bowls e saladas para o seu evento. Festas, casamentos e corporativos com a qualidade Lila Bowls.</p>
      </section>

      {/* Ebook */}
      <section className="ebook">
        <h2>Ebook de Molhos</h2>
        <p>Aprenda a fazer os molhos campeões da Lila Bowls em casa.</p>
        <a href="https://hotmart.com" target="_blank" className="btn-primary">
          Comprar Ebook
        </a>
      </section>

      {/* Contato */}
      <section className="contato">
        <h2>Fale com a gente</h2>
        <a href="https://instagram.com/lilabowls" target="_blank" className="btn-secondary">
          Instagram
        </a>
      </section>
    </div>
  )
}

export default App