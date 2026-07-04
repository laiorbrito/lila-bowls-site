import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Navbar />
      {/* Hero */}
      <section className="hero">
        <img src="/Lila_Logo_SemFundo.png" alt="Lila Bowls" className="hero-logo" />
        <p className="slogan">A escolha que faz bem</p>
      </section>

      {/* Sobre */}
      <section className="sobre" id='sobre'>
        <h2>Nossa História</h2>
        <p>Há 10 anos em Botafogo, a Lila Bowls nasceu da vontade de oferecer uma alimentação saborosa, nutritiva e acessível no coração do Rio de Janeiro. Cada bowl é montado com carinho e ingredientes frescos, para que cada refeição seja uma escolha que faz bem.</p>
      </section>

      {/* Cardápio */}
      <section className="cardapio" id='cardapio'>
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
  <a href="https://www.linkou.vc/lilabowls" target="_blank" className="btn-primary">
    Ver cardápio completo no iFood
  </a>
</section>

      {/* Em breve */}
      <section className="em-breve" id="em-breve">
  <h2>Em Breve</h2>
  <div className="em-breve-grid">
    <div className="em-breve-card">
      <h3>🛵 Lila Express</h3>
      <p>A Lila Bowls chega à Zona Norte! Em breve, delivery de itens prontos direto pra você com a qualidade e o sabor que você já conhece.</p>
    </div>
    <div className="em-breve-card">
      <h3>🥬 Cassel Fruit</h3>
      <p>Parceria com o Cassel Fruit, hortifruti da região. Nossas campeãs de vendas disponíveis perto de você.</p>
    </div>
  </div>
</section>
      
      {/* Eventos */}
      <section className="eventos" id='eventos'>
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
      <section className="ebook" id="ebook">
  <div className="ebook-conteudo">
    <div className="ebook-imagem">
      <img src="/capa_ebook.webp" alt="Guia dos Molhos - Lila Bowls" />
    </div>
    <div className="ebook-texto">
      <h2>Guia dos Molhos</h2>
      <p className="ebook-subtitulo">O segredo do nosso sucesso agora na sua casa!</p>
      <ul className="ebook-lista">
        <li>✅ Receitas exclusivas dos molhos campeões da Lila Bowls</li>
        <li>✅ Fácil de fazer em casa com ingredientes simples</li>
        <li>✅ 10 anos de experiência em um único guia</li>
        <li>✅ Acesso imediato após a compra</li>
      </ul>
      <a href="https://fernandaafiliada47.hotmart.host/pagina-de-vendas-43f42efc-eb58-44f4-833a-38949cea0e5d" target="_blank" className="btn-primary">
        Quero o Guia dos Molhos →
      </a>
    </div>
  </div>
</section>

      {/* Contato */}
      <section className="contato" id="contato">
  <h2>Fale com a gente</h2>
  <div className="links-rapidos">
    <a href="https://www.ifood.com.br/delivery/rio-de-janeiro-rj/lila-bowls---saladeria-botafogo/34ee8c21-19d7-496d-8db2-01a9d2634ad4" target="_blank" className="link-card">
      🛵 Cardápio iFood — Zona Sul
    </a>
    <a href="#" className="link-card em-breve-link">
      🛵 Cardápio iFood — Zona Norte (Em breve)
    </a>
    <a href="https://fernandaafiliada47.hotmart.host/pagina-de-vendas-43f42efc-eb58-44f4-833a-38949cea0e5d" target="_blank" className="link-card">
      📖 eBook — Guia dos Molhos
    </a>
    <a href="https://wa.me/5521997851052?text=Olá! Gostaria de fazer um orçamento para um evento." target="_blank" className="link-card">
      🎉 Lila Festas — Orçamento
    </a>
    <a href="https://share.google/iqMIl9x2mWqmFc6ks" target="_blank" className="link-card">
      ⭐ Avaliações no Google
    </a>
    <a href="https://share.google/iqMIl9x2mWqmFc6ks" target="_blank" className="link-card">
      📍 Retirada — Rua General Severiano 225, Botafogo
    </a>
    <a href="https://instagram.com/lilabowls" target="_blank" className="link-card">
      📸 Instagram
    </a>
    <a href="https://www.tiktok.com/@lilabowls" target="_blank" className="link-card">
      🎵 TikTok
    </a>
    <a href="https://wa.me/5521997851052" target="_blank" className="link-card">
      💬 WhatsApp
    </a>
  </div>
</section>
      <Footer />
    </div>
  )
}

export default App