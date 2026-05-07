const categories = [
  { bg: '#eff6ff', ic: '#2563eb', icone: '🏢', label: 'Employeur', desc: 'Contrats, licenciement, rupture conventionnelle, règlement intérieur', n: 8 },
  { bg: '#f0fdf4', ic: '#16a34a', icone: '👤', label: 'Salarié', desc: 'Démission, contestation de sanction, solde de tout compte', n: 5 },
  { bg: '#fff7ed', ic: '#ea580c', icone: '🛒', label: 'Consommateur', desc: 'Mise en demeure, rétractation, garantie légale', n: 4 },
  { bg: '#fdf4ff', ic: '#9333ea', icone: '🛡', label: 'RGPD / Conformité', desc: 'Registre, DPA, AIPD, politique de confidentialité', n: 6 },
  { bg: '#eff6ff', ic: '#1a4fba', icone: '📄', label: 'Contrats', desc: 'Prestation de services, CGV, NDA, mandat, freelance', n: 5 },
  { bg: '#f8fafc', ic: '#475569', icone: '⚖', label: 'Recouvrement', desc: 'Mise en demeure de payer, relances, injonction de payer', n: 3 },
]

export default function Categories() {
  return (
    <section style={{background: 'white', padding: '4rem 0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
          <div>
            <h2 style={{fontSize: '1.6rem', fontWeight: '700', color: '#0f2d6e', margin: 0}}>Parcourir par profil</h2>
            <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '4px'}}>Choisissez votre situation pour accéder aux bons modèles.</p>
          </div>
          <a href="/catalogue" style={{color: '#1a4fba', fontSize: '13px', fontWeight: '500', textDecoration: 'none'}}>Voir tout le catalogue →</a>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
          {categories.map((cat) => (
            <div key={cat.label} style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', cursor: 'pointer', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
              <div style={{width: '42px', height: '42px', background: cat.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0}}>
                {cat.icone}
              </div>
              <div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <strong style={{fontSize: '13px', color: '#0f2d6e'}}>{cat.label}</strong>
                  <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '10px', padding: '2px 8px', borderRadius: '20px'}}>{cat.n}</span>
                </div>
                <p style={{color: '#6b7280', fontSize: '12px', marginTop: '4px', lineHeight: '1.5'}}>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}