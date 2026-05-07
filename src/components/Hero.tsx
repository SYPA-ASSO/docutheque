export default function Hero() {
  return (
    <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
        <div style={{flex: 1}}>
          <span style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '3px 12px', fontSize: '11px', marginBottom: '16px'}}>
            Rédigés par des juristes français
          </span>
          <h1 style={{color: 'white', fontSize: '2.2rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px 0'}}>
            Tous vos documents juridiques,<br />
            <span style={{color: '#93c5fd'}}>prêts en quelques clics.</span>
          </h1>
          <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '480px', margin: '0 0 24px 0'}}>
            Contrats, mises en demeure, RGPD, documents RH. Plus de 25 modèles conformes au droit français, téléchargeables en DOCX et PDF.
          </p>
          <div style={{display: 'flex', gap: '12px', marginBottom: '20px'}}>
            <button style={{background: 'white', color: '#1a4fba', border: 'none', padding: '11px 22px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer'}}>
              Trouver mon document →
            </button>
            <button style={{background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '11px 22px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer'}}>
              Voir les tarifs
            </button>
          </div>
          <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
            <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '12px'}}>✓ Sans abonnement obligatoire</span>
            <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '12px'}}>✓ DOCX et PDF</span>
            <span style={{color: 'rgba(255,255,255,0.7)', fontSize: '12px'}}>✓ Mis à jour régulièrement</span>
          </div>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', minWidth: '260px'}}>
          <div style={{background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <span style={{fontSize: '24px'}}>📄</span>
            <div>
              <div style={{color: 'white', fontWeight: '700', fontSize: '20px'}}>25+</div>
              <div style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px'}}>modèles disponibles</div>
            </div>
          </div>
          <div style={{background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <span style={{fontSize: '24px'}}>📂</span>
            <div>
              <div style={{color: 'white', fontWeight: '700', fontSize: '20px'}}>6</div>
              <div style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px'}}>catégories juridiques</div>
            </div>
          </div>
          <div style={{background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <span style={{fontSize: '24px'}}>🛡</span>
            <div>
              <div style={{color: '#4ade80', fontWeight: '700', fontSize: '20px'}}>100%</div>
              <div style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px'}}>conformes droit français</div>
            </div>
          </div>
          <div style={{background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <span style={{fontSize: '24px'}}>⏱</span>
            <div>
              <div style={{color: '#fbbf24', fontWeight: '700', fontSize: '20px'}}>48h</div>
              <div style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px'}}>réponse garantie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}