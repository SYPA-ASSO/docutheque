export default function Footer() {
  return (
    <>
      {/* CTA FINAL */}
      <section style={{background: '#0f2d6e', padding: '3rem 2rem', textAlign: 'center'}}>
        <h2 style={{color: 'white', fontSize: '1.5rem', fontWeight: 'bold'}}>Pret a securiser vos documents ?</h2>
        <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginTop: '0.5rem'}}>Acces immediat a des modeles fiables, conformes et personnalisables.</p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '1.5rem'}}>
          <button style={{background: 'white', color: '#1a4fba', border: 'none', padding: '10px 20px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer'}}>Explorer le catalogue</button>
          <button style={{background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)', padding: '10px 20px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer'}}>Voir les tarifs</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background: '#111827', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
            <div style={{width: '24px', height: '24px', background: '#1a4fba', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: 'white', fontSize: '12px'}}>⚖</span>
            </div>
            <span style={{fontSize: '13px', fontWeight: '600', color: 'white'}}>Docutheque</span>
          </div>
          <p style={{color: '#6b7280', fontSize: '11px', maxWidth: '180px', lineHeight: '1.6'}}>Modeles juridiques francais a jour, rediges par des professionnels.</p>
        </div>
        <div style={{display: 'flex', gap: '2.5rem'}}>
          <div>
            <p style={{fontSize: '11px', fontWeight: '600', color: 'white', marginBottom: '8px'}}>Navigation</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
              <a href="/catalogue" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Catalogue</a>
              <a href="/tarifs" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Tarifs</a>
              <a href="/blog" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Blog juridique</a>
            </div>
          </div>
          <div>
            <p style={{fontSize: '11px', fontWeight: '600', color: 'white', marginBottom: '8px'}}>Legal</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
              <a href="/mentions-legales" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Mentions legales</a>
              <a href="/cgu" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>CGU</a>
              <a href="/confidentialite" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Confidentialite</a>
            </div>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT */}
      <div style={{background: '#0f172a', padding: '8px 2rem', textAlign: 'center'}}>
        <p style={{color: '#4b5563', fontSize: '10px'}}>2026 Docutheque · Les modeles fournis ne constituent pas un conseil juridique personnalise.</p>
      </div>
    </>
  )
}