import { useState } from 'react'

export default function Tarifs() {
  const [annuel, setAnnuel] = useState(false)

  return (
    <section style={{background: 'white', padding: '4rem 0', borderTop: '1px solid #e5e7eb'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#0f2d6e'}}>Une offre simple et transparente</h2>
          <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '0.25rem'}}>Des modèles juridiques accessibles à tous, et vos droits expliqués sans jargon.</p>
        </div>

        {/* TOGGLE MENSUEL / ANNUEL */}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '2rem'}}>
          <div style={{background: '#e5e7eb', borderRadius: '20px', padding: '3px', display: 'flex', gap: '2px'}}>
            <span
              onClick={() => setAnnuel(false)}
              style={{background: !annuel ? '#1a4fba' : 'transparent', color: !annuel ? 'white' : '#6b7280', fontSize: '11px', padding: '4px 14px', borderRadius: '16px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s'}}>
              Mensuel
            </span>
            <span
              onClick={() => setAnnuel(true)}
              style={{background: annuel ? '#1a4fba' : 'transparent', color: annuel ? 'white' : '#6b7280', fontSize: '11px', padding: '4px 14px', borderRadius: '16px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s'}}>
              Annuel
            </span>
          </div>
          <span style={{background: '#dcfce7', color: '#16a34a', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: '600'}}>2 mois offerts sur l'offre annuelle</span>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', maxWidth: '900px', margin: '0 auto'}}>

          {/* GRATUIT */}
          <div style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
              <p style={{fontWeight: '600', color: '#0f2d6e'}}>Gratuit</p>
              <span style={{background: '#f3f4f6', color: '#6b7280', fontSize: '10px', padding: '2px 8px', borderRadius: '20px'}}>Découverte</span>
            </div>
            <p style={{fontSize: '28px', fontWeight: '600', color: '#0f2d6e'}}>0 €</p>
            <p style={{color: '#6b7280', fontSize: '12px'}}>pour toujours</p>
            <div style={{borderTop: '1px solid #f3f4f6', margin: '12px 0'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '7px'}}>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>12 modèles essentiels</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>DOCX et PDF</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#d1d5db', marginRight: '5px'}}>✗</span><span style={{color: '#9ca3af'}}>Notices juridiques</span></p>
              <p style={{fontSize: '12px'}}><span style={{color: '#d1d5db', marginRight: '5px'}}>✗</span><span style={{color: '#9ca3af'}}>Bibliothèque complète</span></p>
              <p style={{fontSize: '12px'}}><span style={{color: '#d1d5db', marginRight: '5px'}}>✗</span><span style={{color: '#9ca3af'}}>Questions sous 48h</span></p>
            </div>
            <button style={{width: '100%', marginTop: '14px', background: 'white', color: '#1a4fba', border: '1.5px solid #1a4fba', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer'}}>
              Créer un compte gratuit
            </button>
          </div>

          {/* PREMIUM */}
          <div style={{border: '2px solid #1a4fba', borderRadius: '12px', padding: '1.5rem', position: 'relative'}}>
            <span style={{position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#1a4fba', color: 'white', fontSize: '10px', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap', fontWeight: '500'}}>⭐ Recommandé</span>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
              <p style={{fontWeight: '600', color: '#0f2d6e'}}>Premium</p>
              <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '10px', padding: '2px 8px', borderRadius: '20px'}}>Abonnement</span>
            </div>

            {annuel ? (
              <>
                <p style={{fontSize: '28px', fontWeight: '600', color: '#1a4fba'}}>147,97 €<span style={{fontSize: '14px', color: '#6b7280', fontWeight: '400'}}> /an</span></p>
                <p style={{color: '#6b7280', fontSize: '12px'}}>soit <strong style={{color: '#16a34a'}}>12,33 €/mois</strong> (2 mois offerts)</p>
                <p style={{color: '#e53e3e', fontSize: '11px', marginTop: '3px'}}>Engagement 12 mois · renouvellement annuel</p>
              </>
            ) : (
              <>
                <p style={{fontSize: '28px', fontWeight: '600', color: '#1a4fba'}}>14,90 €<span style={{fontSize: '14px', color: '#6b7280', fontWeight: '400'}}> /mois</span></p>
                <p style={{color: '#6b7280', fontSize: '12px'}}>ou <strong style={{color: '#0f2d6e'}}>147,97 €/an</strong> — 2 mois offerts</p>
                <p style={{color: '#e53e3e', fontSize: '11px', marginTop: '3px'}}>Engagement 12 mois · renouvellement annuel</p>
              </>
            )}

            <div style={{borderTop: '1px solid #f3f4f6', margin: '12px 0'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '7px'}}>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Bibliothèque complète (25+ modèles)</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Notices juridiques détaillées</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Mises à jour incluses</p>
              <div style={{background: '#eff6ff', borderRadius: '8px', padding: '8px 10px', marginTop: '4px'}}>
                <p style={{fontSize: '11px', fontWeight: '600', color: '#1a4fba', marginBottom: '4px'}}>Espace pédagogique inclus</p>
                <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Fiches de vulgarisation juridique</p>
                <p style={{fontSize: '12px', marginTop: '4px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>1 question · réponse sous 48h</p>
                <p style={{fontSize: '11px', color: '#6b7280', marginTop: '4px', paddingLeft: '16px'}}>puis 9,90 € par question supplémentaire</p>
              </div>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Support email prioritaire</p>
            </div>
            <button style={{width: '100%', marginTop: '14px', background: '#1a4fba', color: 'white', border: 'none', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer'}}>
              {annuel ? 'Démarrer Premium Annuel' : 'Démarrer Premium'}
            </button>
          </div>

          {/* INFORMATION SUR VOS DROITS */}
          <div style={{border: '1px solid #d4af37', borderRadius: '12px', padding: '1.5rem', position: 'relative'}}>
            <span style={{position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#b8860b', color: 'white', fontSize: '10px', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap', fontWeight: '500'}}>Sans abonnement</span>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
              <p style={{fontWeight: '600', color: '#0f2d6e', lineHeight: '1.3'}}>Information<br />sur vos droits</p>
              <span style={{background: '#fefce8', color: '#b8860b', fontSize: '10px', padding: '2px 8px', borderRadius: '20px'}}>À l'unité</span>
            </div>
            <p style={{fontSize: '28px', fontWeight: '600', color: '#b8860b'}}>47 €</p>
            <p style={{color: '#6b7280', fontSize: '12px'}}>par question · paiement unique</p>
            <p style={{color: '#16a34a', fontSize: '11px', marginTop: '3px'}}>Réponse garantie sous 48h</p>
            <div style={{borderTop: '1px solid #f3f4f6', margin: '12px 0'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '7px'}}>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Réponse claire et pédagogique</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Sans jargon juridique</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Rédigée par un juriste</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Sans abonnement ni engagement</p>
            </div>
            <div style={{background: '#fefce8', borderRadius: '8px', padding: '8px 10px', marginTop: '10px', border: '1px solid #fde68a'}}>
              <p style={{fontSize: '11px', color: '#92400e', lineHeight: '1.5'}}>Réponse à vocation pédagogique uniquement. Ne remplace pas un conseil juridique personnalisé.</p>
            </div>
            <button style={{width: '100%', marginTop: '14px', background: '#b8860b', color: 'white', border: 'none', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer'}}>
              Poser ma question
            </button>
          </div>

        </div>

        {/* NOTE ENGAGEMENT */}
        <div style={{maxWidth: '900px', margin: '1.5rem auto 0', background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '10px', padding: '0.875rem 1.25rem'}}>
          <p style={{color: '#92400e', fontSize: '11px', lineHeight: '1.7', margin: 0}}>
            <strong>Information importante —</strong> L'abonnement Premium est souscrit pour une durée minimale de 12 mois. À l'issue de cette période, il se renouvelle automatiquement pour une nouvelle année, sauf résiliation adressée par écrit au moins 30 jours avant l'échéance. Le tarif mensuel affiché est donné à titre indicatif, calculé sur la base de l'engagement annuel.
          </p>
        </div>

      </div>
    </section>
  )
}