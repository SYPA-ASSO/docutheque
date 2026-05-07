export default function About() {
  return (
    <section style={{background: '#f8fafc', borderTop: '1px solid #e5e7eb', padding: '4rem 0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>

        <div style={{flex: '0 0 48%'}}>
          <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.05em'}}>
            QUI SOMMES-NOUS
          </span>
          <h2 style={{fontSize: '1.6rem', fontWeight: '700', color: '#0f2d6e', margin: '12px 0 8px 0', lineHeight: '1.4'}}>
            Des documents conformes, prêts à l'emploi et vos droits expliqués, sans jargon.
          </h2>
          <p style={{color: '#1a4fba', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '20px'}}>
            Docuthèque est la plateforme de ressources du Cabinet Cholez-Pagotto, conçue pour sécuriser vos démarches administratives et juridiques sans la complexité du jargon.
          </p>
          <p style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '24px'}}>
            Docuthèque est la plateforme de ressources du Cabinet Cholez-Pagotto, cabinet de juristes formalistes intervenant en France. Nous mettons à votre disposition des modèles de documents à vocation pratique, élaborés par des professionnels du droit ayant une connaissance approfondie des domaines couverts.
          </p>
          <div style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap'}}>
            {['Droit du travail', 'Droit de la consommation', 'Droit des sociétés', 'Conformité RGPD', 'Droit des assurances', 'Recouvrement de créances'].map((domaine) => (
              <div key={domaine} style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                <span style={{color: '#16a34a', fontSize: '16px'}}>✓</span>
                <span style={{color: '#374151', fontSize: '13px', fontWeight: '500'}}>{domaine}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{flex: '0 0 48%', display: 'flex', flexDirection: 'column', gap: '14px'}}>
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
              <span style={{fontSize: '22px'}}>⚖️</span>
              <strong style={{color: '#0f2d6e', fontSize: '13px'}}>Élaborés par des professionnels</strong>
            </div>
            <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
              Nos modèles sont conçus par les juristes du Cabinet Cholez-Pagotto, forts d'une pratique quotidienne en droit formaliste, droit des assurances et protection juridique.
            </p>
          </div>
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
              <span style={{fontSize: '22px'}}>🔄</span>
              <strong style={{color: '#0f2d6e', fontSize: '13px'}}>Mis à jour en temps réel</strong>
            </div>
            <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
              Notre base documentaire est mise à jour dès qu'une loi, un décret ou une jurisprudence modifie le cadre juridique applicable. Vous téléchargez toujours la version conforme en vigueur.
            </p>
          </div>
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
              <span style={{fontSize: '22px'}}>🇫🇷</span>
              <strong style={{color: '#0f2d6e', fontSize: '13px'}}>100% droit français</strong>
            </div>
            <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
              Tous nos documents sont conformes au droit français en vigueur, applicables en France métropolitaine et dans les DOM-TOM.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}