const categories = [
  { couleur: "bg-blue-50", icone: "🏢", texte: "text-blue-700", label: "Employeur", desc: "Contrats, licenciement, rupture conventionnelle", n: 8 },
  { couleur: "bg-green-50", icone: "👤", texte: "text-green-700", label: "Salarie", desc: "Demission, contestation, solde de tout compte", n: 5 },
  { couleur: "bg-orange-50", icone: "🛒", texte: "text-orange-700", label: "Consommateur", desc: "Mise en demeure, retractation, garantie legale", n: 4 },
  { couleur: "bg-purple-50", icone: "🛡", texte: "text-purple-700", label: "RGPD / Conformite", desc: "Registre, DPA, AIPD, politique de confidentialite", n: 6 },
  { couleur: "bg-blue-50", icone: "📄", texte: "text-blue-700", label: "Contrats", desc: "Prestation, CGV, NDA, mandat, freelance", n: 5 },
  { couleur: "bg-gray-50", icone: "⚖", texte: "text-gray-700", label: "Recouvrement", desc: "Mise en demeure de payer, relances, injonction", n: 3 },
]

export default function Categories() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-bold text-navy">Parcourir par profil</h2>
          <p className="text-gray-500 text-sm mt-1">Choisissez votre situation pour acceder aux bons modeles.</p>
        </div>
        <a href="/catalogue" className="text-navy-light text-sm font-medium hover:underline">
          Voir tout le catalogue →
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div key={cat.label} className="border border-gray-200 rounded-xl p-5 hover:border-navy-light hover:shadow-md transition-all cursor-pointer">
            <div className="flex justify-between items-start">
              <div className={`w-10 h-10 ${cat.couleur} rounded-lg flex items-center justify-center text-xl`}>
                {cat.icone}
              </div>
              <span className="text-xs bg-blue-50 text-navy-light px-2 py-0.5 rounded-full">{cat.n}</span>
            </div>
            <h3 className="font-semibold text-navy mt-3">{cat.label}</h3>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}