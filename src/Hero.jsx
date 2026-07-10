function Hero() {
  return (
    <section className="hero">
      <img src="/Lila_Logo_SemFundo.png" alt="Lila Bowls" className="hero-logo" width="160" height="160" />
      <p className="slogan">A escolha que faz bem</p>
      <div className="hero-cta">
        <a 
          href="https://www.ifood.com.br/delivery/rio-de-janeiro-rj/lila-bowls---saladas-pokes-e-wraps-botafogo/34ee8c21-19d7-496d-8db2-01a9d2634ad4" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-ifood"
        >
          <img src="/ifood-logo.png" alt="iFood" width="53" height="28" />
          <span>Peça aqui<br/>Zona Sul</span>
        </a>

        <a 
          href="https://www.ifood.com.br/delivery/rio-de-janeiro-rj/lila-bowls-express-iraja/473c05d8-2ecf-4c20-aec7-a3b57799be4d" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-ifood"
        >
          <img src="/ifood-logo.png" alt="iFood" width="53" height="28" />
          <span>Peça aqui<br/>Zona Norte</span>
        </a>
      </div>
    </section>
  )
}

export default Hero