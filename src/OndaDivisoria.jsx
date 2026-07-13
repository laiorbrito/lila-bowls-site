
function OndaDivisoria({ corTopo, corBaixo }) {
  return (
    <div style={{ backgroundColor: corBaixo, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '80px', display: 'block' }}
      >
        <path
          d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
          fill={corTopo}
        />
      </svg>
    </div>
  )
}

export default OndaDivisoria