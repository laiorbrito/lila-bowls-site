function Ebook() {
  return (
    <section className="ebook animate" id="ebook">
      <div className="ebook-conteudo">
        <div className="ebook-imagem">
          <img src="/capa_ebook.webp" alt="Guia dos Molhos - Lila Bowls" width="300" height="300" />
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
          <a 
            href="https://fernandaafiliada47.hotmart.host/pagina-de-vendas-43f42efc-eb58-44f4-833a-38949cea0e5d" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quero o Guia dos Molhos →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Ebook