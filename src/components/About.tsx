export default function About() {
  const domaines = [
    'Droit du travail et de l\'emploi',
    'Droit de la consommation',
    'Droit de la famille',
    'Droit des sociétés et des entreprises',
    'Droit des contrats',
    'Droit immobilier et locatif',
    'Droit du numérique et des données personnelles (RGPD)',
    'Droit des assurances',
    'Droit du handicap et de l\'accessibilité',
    'Droit associatif et des organisations',
    'Droit agricole et rural',
    'Droit du recouvrement de créances',
    'Droit commercial et des affaires',
    'Droit de la propriété intellectuelle',
    'Droit de la santé',
    'Droit de l\'environnement',
    'Droit fiscal et comptable',
    'Droit bancaire et financier',
    'Droit pénal des affaires',
    'Droit administratif et des collectivités',
    'Droit de la construction et de l\'urbanisme',
    'Droit du sport et des loisirs',
    'Droit de l\'éducation et de la formation',
  ]

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
          <p style={{color: '#1a4fba', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '16px'}}>
            Docuthèque est la plateforme de ressources du Cabinet Cholez-Pagotto, conçue pour sécuriser vos démarches administratives et juridiques sans la complexité du jargon.
          </p>
          <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '20px'}}>
            <p style={{color: '#1e3a5f', fontSize: '0.9rem', lineHeight: '1.8', margin: 0}}>
              Chaque document de la Docuthèque est une création en conformité avec la législation, actualisée autant de fois que nécessaire. Chaque modèle est le fruit d'une expertise dédiée, mise en cohérence avec l'évolution permanente des textes grâce à une veille quotidienne. Résultat : vous profitez de documents simples à utiliser, avec la garantie d'une précision juridique absolue.
            </p>
          </div>
          <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
            {domaines.map((domaine) => (
              <span key={domaine} style={{display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '4px 10px', fontSize: '11px', color: '#374151', fontWeight: '500'}}>
                <span style={{color: '#16a34a', fontSize: '12px'}}>✓</span>
                {domaine}
              </span>
            ))}
            <span style={{display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '20px', padding: '4px 10px', fontSize: '11px', color: '#1a4fba', fontWeight: '600', fontStyle: 'italic'}}>
              <span style={{color: '#1a4fba', fontSize: '12px'}}>✓</span>
              Et de nombreux autres domaines du droit...
            </span>
          </div>
        </div>

        <div style={{flex: '0 0 48%', display: 'flex', flexDirection: 'column', gap: '14px'}}>
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
              <span style={{fontSize: '22px'}}>🧑‍⚖️</span>
              <strong style={{color: '#0f2d6e', fontSize: '13px'}}>100% humain, zéro intelligence artificielle</strong>
            </div>
            <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
              Chaque modèle de document est rédigé et relu par un juriste, il n'y a pas d'intervention de l'IA. Dans un domaine où une erreur juridique peut coûter cher, nous faisons le choix de l'expertise humaine et de la précision. L'IA peut halluciner. Nos juristes, non.
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
              <span style={{fontSize: '22px'}}>✏️</span>
              <strong style={{color: '#0f2d6e', fontSize: '13px'}}>100% personnalisables — adaptez chaque document à votre situation</strong>
            </div>
            <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
              Tous nos modèles sont fournis au format DOCX, le format Word universel. Vous les ouvrez, vous les complétez, vous les adaptez à votre situation exacte — sans contrainte, sans abonnement logiciel, sans intermédiaire. Le document final est le vôtre, entièrement.
            </p>
          </div>

          <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', marginTop: '4px'}}>
            <h3 style={{color: 'white', fontSize: '1rem', fontWeight: '700', marginBottom: '12px', lineHeight: '1.4'}}>
              Le droit du quotidien, pour tous les profils
            </h3>
            <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.8', marginBottom: '12px'}}>
              Que vous soyez salarié confronté à une situation difficile au travail, employeur face à une obligation légale, consommateur lésé par un prestataire, dirigeant en train de créer votre société, bailleur ou locataire en désaccord, association cherchant à se structurer ou particulier souhaitant simplement comprendre ses droits — Docuthèque a été conçue pour vous.
            </p>
            <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.8', marginBottom: '16px'}}>
              Nos modèles couvrent l'ensemble des situations juridiques de la vie courante et professionnelle, sans distinction de statut ni de niveau de connaissance juridique. Du contrat de travail aux statuts de société, de la mise en demeure au registre RGPD, du bail rural à la lettre de réclamation auprès d'un assureur — chaque document est accessible, compréhensible et immédiatement utilisable.
            </p>
            <p style={{color: '#93c5fd', fontSize: '13px', fontWeight: '600', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '12px', margin: 0}}>
              Vous avez des droits. Nous vous proposons les solutions pour mieux les comprendre. Parce qu'un document bien rédigé aujourd'hui, c'est certainement un litige évité demain.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}