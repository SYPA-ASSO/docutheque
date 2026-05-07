const steps = [
  { n: 1, titre: "Choisissez votre profil", desc: "Employeur, salarie, consommateur, dirigeant ou DPO." },
  { n: 2, titre: "Selectionnez votre document", desc: "25+ modeles classes par categorie et cas d'usage." },
  { n: 3, titre: "Telechargez et personnalisez", desc: "DOCX et PDF prets a completer et a signer." },
]

export default function HowItWorks() {
  return (
    <section style={{background: '#f0f4ff', padding: '4rem 2rem', borderTop: '2px solid #1a4fba'}}>
      <div style={{textAlign: 'center', marginBottom: '2rem'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#0f2d6e'}}>Comment ca marche</h2>
        <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '0.25rem'}}>Simple, rapide, sans jargon.</p>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
        {steps.map((step) => (
          <div key={step.n} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem'}}>
            <div style={{width: '28px', height: '28px', background: '#1a4fba', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 'bold', flexShrink: 0}}>
              {step.n}
            </div>
            <div>
              <h3 style={{fontWeight: '600', color: '#0f2d6e', fontSize: '0.875rem'}}>{step.titre}</h3>
              <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '4px', lineHeight: '1.5'}}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}