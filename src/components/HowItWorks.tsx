export default function HowItWorks() {
  return (
    <>
      {/* SECTION 1 — DOCUMENTS */}
      <section style={{background: '#f0f4ff', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '4rem 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
            <h2 style={{fontSize: '1.6rem', fontWeight: '700', color: '#0f2d6e'}}>Comment ça marche</h2>
            <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '6px'}}>Simple, rapide, sans jargon.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <div style={{width: '28px', height: '28px', background: '#1a4fba', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>1</div>
              <div>
                <h3 style={{fontWeight: '600', color: '#0f2d6e', fontSize: '0.875rem'}}>Choisissez votre profil</h3>
                <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '4px', lineHeight: '1.6'}}>Employeur, salarié, consommateur, dirigeant ou DPO — chaque profil dispose de ses propres modèles adaptés à sa situation.</p>
              </div>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <div style={{width: '28px', height: '28px', background: '#1a4fba', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>2</div>
              <div>
                <h3 style={{fontWeight: '600', color: '#0f2d6e', fontSize: '0.875rem'}}>Sélectionnez votre document</h3>
                <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '4px', lineHeight: '1.6'}}>Plus de 25 modèles classés par catégorie et cas d'usage, couvrant l'ensemble des situations juridiques du quotidien.</p>
              </div>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <div style={{width: '28px', height: '28px', background: '#1a4fba', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>3</div>
              <div>
                <h3 style={{fontWeight: '600', color: '#0f2d6e', fontSize: '0.875rem'}}>Téléchargez et personnalisez</h3>
                <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '4px', lineHeight: '1.6'}}>Format DOCX et PDF, prêts à compléter et à signer. Adaptez chaque document à votre situation exacte, sans contrainte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INFORMATION SUR VOS DROITS */}
      <section style={{background: '#f0f4ff', padding: '4rem 0', borderBottom: '1px solid #e5e7eb'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
            <h2 style={{fontSize: '1.6rem', fontWeight: '700', color: '#0f2d6e'}}>Vos droits expliqués, par un juriste</h2>
            <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '6px'}}>Une question sur vos droits ? Nous vous aidons à mieux les comprendre. Nous vous répondons en vous expliquant le droit, en clair, sans jargon, sous 24 à 48h.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <div style={{width: '28px', height: '28px', background: '#0f2d6e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>1</div>
              <div>
                <h3 style={{fontWeight: '600', color: '#0f2d6e', fontSize: '0.875rem'}}>Vous avez une question sur vos droits</h3>
                <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '4px', lineHeight: '1.6'}}>Licenciement, litige consommateur, clause contractuelle, obligation légale, droit du voisinage... Posez votre question en langage courant — pas besoin de maîtriser le droit.</p>
              </div>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <div style={{width: '28px', height: '28px', background: '#0f2d6e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>2</div>
              <div>
                <h3 style={{fontWeight: '600', color: '#0f2d6e', fontSize: '0.875rem'}}>Choisissez votre formule</h3>
                <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '4px', lineHeight: '1.6'}}>Abonné Premium ? La première question est incluse, les suivantes à 9,90 €. Sans abonnement ? Accédez directement à l'offre unitaire <em>Information sur vos droits</em> à 47 €, sans abonnement ni engagement.</p>
              </div>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
              <div style={{width: '28px', height: '28px', background: '#0f2d6e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>3</div>
              <div>
                <h3 style={{fontWeight: '600', color: '#0f2d6e', fontSize: '0.875rem'}}>Recevez une réponse claire sous 24 à 48h</h3>
                <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '4px', lineHeight: '1.6'}}>Un juriste vous apporte une réponse documentaire et pédagogique par écrit, sous 24 à 48h. Cette réponse a vocation à vous informer et à vous orienter, elle ne constitue pas un conseil juridique au sens de la loi.</p>
              </div>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.5rem', marginTop: '2rem'}}>
            <p style={{color: '#9ca3af', fontSize: '11px', lineHeight: '1.7', margin: 0}}>
              <strong style={{color: '#6b7280'}}>Information importante —</strong> Les réponses fournies sont à vocation informative et pédagogique. Elles ne constituent pas une consultation juridique au sens de la loi du 31 décembre 1971. Pour toute situation nécessitant un acte juridique ou une représentation, nous vous recommandons de consulter un avocat. Selon votre besoin, nous pouvons vous orienter vers des avocats partenaires, sans engagement de votre part.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}