export default function About() {
  return (
    <section style={{background: '#f8fafc', borderTop: '1px solid #e5e7eb', padding: '4rem 0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '4rem', alignItems: 'flex-start'}}>
        
        <div style={{flex: 1}}>
          <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.05em'}}>
            QUI SOMMES-NOUS
          </span>
          <h2 style={{fontSize: '1.6rem', fontWeight: '700', color: '#0f2d6e', margin: '12px 0 16px 0', lineHeight: '1.3'}}>
            Une plateforme créée par des juristes,<br />pour tous les citoyens
          </h2>
          <p style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px'}}>
            Docuthèque est née d'un constat simple : le droit est complexe, mais vos droits méritent d'être accessibles. Créée par un juriste spécialisé en droit des assurances, protection juridique et conformité RGPD, notre plateforme met à votre disposition des modèles de documents juridiques fiables, conformes au droit français en vigueur et rédigés en langage clair.
          </p>
          <p style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '24px'}}>
            Que vous soyez employeur, salarié, consommateur, dirigeant d'entreprise ou délégué à la protection des données, vous trouverez ici les outils juridiques dont vous avez besoin : contrats de travail, lettres de mise en demeure, statuts de société, registres RGPD, courriers assurantiels et bien plus encore.
          </p>
          <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: '#16a34a', fontSize: '18px'}}>✓</span>
              <span style={{color: '#374151', fontSize: '13px', fontWeight: '500'}}>Droit du travail</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: '#16a34a', fontSize: '18px'}}>✓</span>
              <span style={{color: '#374151', fontSize: '13px', fontWeight: '500'}}>Droit de la consommation</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: '#16a34a', fontSize: '18px'}}>✓</span>
              <span style={{color: '#374151', fontSize: '13px', fontWeight: '500'}}>Droit des sociétés</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: '#16a34a', fontSize: '18px'}}>✓</span>
              <span style={{color: '#374151', fontSize: '13px', fontWeight: '500'}}>Conformité RGPD</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: '#16a34a', fontSize: '18px'}}>✓</span>
              <span style={{color: '#374151', fontSize: '13px', fontWeight: '500'}}>Droit des assurances</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: '#16a34a', fontSize: '18px'}}>✓</span>
              <span style={{color: '#374151', fontSize: '13px', fontWeight: '500'}}>Recouvrement de créances</span>
            </div>
          </div>
        </div>

        <div style={{minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '14px'}}>
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
              <span style={{fontSize: '24px'}}>⚖️</span>
              <strong style={{color: '#0f2d6e', fontSize: '13px'}}>Expertise juridique certifiée</strong>
            </div>
            <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
              Tous nos modèles sont rédigés et vérifiés par un juriste diplômé, spécialisé en droit des assurances et protection juridique.
            </p>
          </div>
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
              <span style={{fontSize: '24px'}}>🔄</span>
              <strong style={{color: '#0f2d6e', fontSize: '13px'}}>Mis à jour en temps réel</strong>
            </div>
            <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
              Notre base documentaire est mise à jour dès qu'une loi, un décret ou une jurisprudence modifie le cadre juridique applicable.
            </p>
          </div>
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
              <span style={{fontSize: '24px'}}>🇫🇷</span>
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