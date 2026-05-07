export default function Tarifs() {
  return (
    <section style={{background: 'white', padding: '4rem 2rem', borderTop: '1px solid #e5e7eb'}}>
      <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#0f2d6e'}}>Une offre simple et transparente</h2>
        <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '0.25rem'}}>Des modeles juridiques accessibles a tous.</p>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', maxWidth: '900px', margin: '0 auto'}}>

        {/* GRATUIT */}
        <div style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
            <p style={{fontWeight: '600', color: '#0f2d6e'}}>Gratuit</p>
            <span style={{background: '#f3f4f6', color: '#6b7280', fontSize: '10px', padding: '2px 8px', borderRadius: '20px'}}>Decouverte</span>
          </div>
          <p style={{fontSize: '28px', fontWeight: '600', color: '#0f2d6e'}}>0 €</p>
          <p style={{color: '#6b7280', fontSize: '12px'}}>pour toujours</p>
          <div style={{borderTop: '1px solid #f3f4f6', margin: '12px 0'}}></div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '7px'}}>
            <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>12 modeles essentiels</p>
            <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>DOCX et PDF</p>
            <p style={{fontSize: '12px'}}><span style={{color: '#d1d5db', marginRight: '5px'}}>✗</span><span style={{color: '#9ca3af'}}>Notices juridiques</span></p>
            <p style={{fontSize: '12px'}}><span style={{color: '#d1d5db', marginRight: '5px'}}>✗</span><span style={{color: '#9ca3af'}}>Bibliotheque complete</span></p>
            <p style={{fontSize: '12px'}}><span style={{color: '#d1d5db', marginRight: '5px'}}>✗</span><span style={{color: '#9ca3af'}}>Questions sous 48h</span></p>
          </div>
          <button style={{width: '100%', marginTop: '14px', background: 'white', color: '#1a4fba', border: '1.5px solid #1a4fba', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer'}}>
            Creer un compte gratuit
          </button>
        </div>

        {/* PREMIUM */}
        <div style={{border: '2px solid #1a4fba', borderRadius: '12px', padding: '1.5rem', position: 'relative'}}>
          <span style={{position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#1a4fba', color: 'white', fontSize: '10px', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap', fontWeight: '500'}}>Recommande</span>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
            <p style={{fontWeight: '600', color: '#0f2d6e'}}>Premium</p>
            <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '10px', padding: '2px 8px', borderRadius: '20px'}}>Abonnement</span>
          </div>
          <p style={{fontSize: '28px', fontWeight: '600', color: '#1a4fba'}}>9,90 €<span style={{fontSize: '14px', color: '#6b7280', fontWeight: '400'}}> /mois</span></p>
          <p style={{color: '#6b7280', fontSize: '12px'}}>ou 79 € /an · economisez 40 €</p>
          <p style={{color: '#16a34a', fontSize: '11px', marginTop: '3px'}}>Sans engagement · resiliation a tout moment</p>
          <div style={{borderTop: '1px solid #f3f4f6', margin: '12px 0'}}></div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '7px'}}>
            <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Bibliotheque complete (25+ modeles)</p>
            <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Notices juridiques detaillees</p>
            <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Mises a jour incluses</p>
            <div style={{background: '#eff6ff', borderRadius: '8px', padding: '8px 10px', marginTop: '4px'}}>
              <p style={{fontSize: '11px', fontWeight: '600', color: '#1a4fba', marginBottom: '4px'}}>Espace pedagogique inclus</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Fiches de vulgarisation juridique</p>
              <p style={{fontSize: '12px', marginTop: '4px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>1 question · reponse sous 48h</p>
              <p style={{fontSize: '11px', color: '#6b7280', marginTop: '4px', paddingLeft: '16px'}}>puis 9,90 € par question supplementaire</p>
            </div>
            <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Support email prioritaire</p>
          </div>
          <button style={{width: '100%', marginTop: '14px', background: '#1a4fba', color: 'white', border: 'none', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer'}}>
            Demarrer Premium
          </button>
        </div>

        {/* INFORMATION SUR VOS DROITS */}
        <div style={{border: '1px solid #d4af37', borderRadius: '12px', padding: '1.5rem', position: 'relative'}}>
          <span style={{position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#b8860b', color: 'white', fontSize: '10px', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap', fontWeight: '500'}}>Sans abonnement</span>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
            <p style={{fontWeight: '600', color: '#0f2d6e', lineHeight: '1.3'}}>Information<br/>sur vos droits</p>
            <span style={{background: '#fefce8', color: '#b8860b', fontSize: '10px', padding: '2px 8px', borderRadius: '20px'}}>A l'unite</span>
          </div>
          <p style={{fontSize: '28px', fontWeight: '600', color: '#b8860b'}}>47 €</p>
          <p style={{color: '#6b7280', fontSize: '12px'}}>par question · paiement unique</p>
          <p style={{color: '#16a34a', fontSize: '11px', marginTop: '3px'}}>Reponse garantie sous 48h</p>
          <div style={{borderTop: '1px solid #f3f4f6', margin: '12px 0'}}></div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '7px'}}>
            <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Reponse claire et pedagogique</p>
            <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Sans jargon juridique</p>
            <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Redigee par un juriste</p>
            <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Sans abonnement ni engagement</p>
          </div>
          <div style={{background: '#fefce8', borderRadius: '8px', padding: '8px 10px', marginTop: '10px', border: '1px solid #fde68a'}}>
            <p style={{fontSize: '11px', color: '#92400e', lineHeight: '1.5'}}>Reponse a vocation pedagogique uniquement. Ne remplace pas un conseil juridique personnalise.</p>
          </div>
          <button style={{width: '100%', marginTop: '14px', background: '#b8860b', color: 'white', border: 'none', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer'}}>
            Poser ma question
          </button>
        </div>

      </div>
    </section>
  )
}
