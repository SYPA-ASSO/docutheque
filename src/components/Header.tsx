export default function Header() {
  return (
    <>
      <div style={{background: '#0f2d6e', padding: '5px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span style={{color: '#93c5fd', fontSize: '11px'}}>📞 01 XX XX XX XX — Numéro non surtaxé</span>
          <span style={{color: '#93c5fd', fontSize: '11px', cursor: 'pointer'}}>Mon espace client</span>
        </div>
      </div>
      <nav style={{background: 'white', borderBottom: '2px solid #1a4fba', padding: '10px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <div style={{width: '32px', height: '32px', background: '#1a4fba', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: 'white', fontSize: '16px'}}>⚖</span>
            </div>
            <div>
              <div style={{fontSize: '15px', fontWeight: '600', color: '#0f2d6e'}}>Docuthèque</div>
              <div style={{fontSize: '10px', color: '#6b7280'}}>Vos documents juridiques en ligne</div>
            </div>
          </div>
          <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
            <a href="/" style={{fontSize: '13px', fontWeight: '600', color: '#1a4fba', borderBottom: '2px solid #1a4fba', paddingBottom: '2px', textDecoration: 'none'}}>Accueil</a>
            <a href="/catalogue" style={{fontSize: '13px', color: '#374151', textDecoration: 'none'}}>Catalogue</a>
            <a href="/tarifs" style={{fontSize: '13px', color: '#374151', textDecoration: 'none'}}>Tarifs</a>
            <a href="/blog" style={{fontSize: '13px', color: '#374151', textDecoration: 'none'}}>Blog juridique</a>
          </div>
          <button style={{background: '#1a4fba', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer'}}>
            Inscription gratuite
          </button>
        </div>
      </nav>
    </>
  )
}