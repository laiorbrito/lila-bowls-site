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
  <div className="pratos-grid">
    {[
      { nome: "Baratíssima", descricao: "Mix de folhas, cebola roxa, cenoura, milho, tomate, frango desfiado, molho verdinho e batata palha" },
      { nome: "Monte Seu Bowl de Salada", descricao: "Escolha sua proteína, base, ingredientes, molho e finalização do seu jeito" },
      { nome: "Monte Seu Bowl de Macarrão", descricao: "Espaguete ou penne, proteína, ingredientes e molho da sua escolha" },
      { nome: "Mediterrânea", descricao: "Mix de folhas, brócolis, cebola roxa, penne, queijo minas, tomate, frango desfiado e molho caesar" },
      { nome: "Caesar", descricao: "Alface americana, bacon, frango grelhado, parmesão, crouton e molho caesar" },
    ].map((prato, index) => (
      <div key={index} className="prato-card">
        <h3>{prato.nome}</h3>
        <p>{prato.descricao}</p>
      </div>
    ))}
  </div>
  <a href="https://www.ifood.com.br" target="_blank" className="btn-primary">
    Ver cardápio completo no iFood
  </a>
</section>

      {/* Eventos */}
      <section className="eventos">
  <h2>Eventos & Casamentos</h2>
  <p>Levamos nossa estação de bowls e saladas para o seu evento. Festas, casamentos e corporativos com a qualidade Lila Bowls.</p>
  <a 
    href="https://wa.me/5521997851052" 
    target="_blank" 
    className="btn-whatsapp"
  >
    💬 Solicitar orçamento
  </a>
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