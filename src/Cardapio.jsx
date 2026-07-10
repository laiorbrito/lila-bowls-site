import { pratos } from './data/pratos'

function Cardapio() {
  return (
    <section className="cardapio animate" id="cardapio">
      <h2>Nosso Cardápio</h2>
      <p>Disponível pelo iFood para toda a Zona Sul</p>
      <div className="pratos-grid">
        {pratos.map((prato, index) => (
          <div key={index} className="prato-card">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
          </div>
        ))}
      </div>
      <a href="https://www.linkou.vc/lilabowls" target="_blank" rel="noopener noreferrer" className="btn-primary">
        Ver cardápio completo no iFood
      </a>
    </section>
  )
}

export default Cardapio