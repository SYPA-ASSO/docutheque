export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light px-6 py-16 flex gap-8 items-start">
      <div className="flex-1">
        <span className="inline-block bg-white/15 text-white border border-white/30 rounded-full px-3 py-1 text-xs mb-4">
          Rediges par des juristes francais
        </span>
        <h1 className="text-white text-3xl font-bold leading-tight">
          Tous vos documents juridiques,
          <span className="text-blue-300"> prets en quelques clics.</span>
        </h1>
        <p className="text-white/75 text-sm mt-4 leading-relaxed max-w-md">
          Contrats, mises en demeure, RGPD, documents RH. Plus de 25 modeles conformes au droit francais, telechargeables en DOCX et PDF.
        </p>
        <div className="flex gap-3 mt-6">
          <button className="bg-white text-navy-light font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-gray-100 transition-colors">
            Trouver mon document
          </button>
          <button className="bg-transparent text-white border border-white/40 text-sm px-5 py-2.5 rounded-md hover:bg-white/10 transition-colors">
            Voir les tarifs
          </button>
        </div>
        <div className="flex gap-5 mt-5">
          <span className="text-white/70 text-xs">Sans abonnement obligatoire</span>
          <span className="text-white/70 text-xs">DOCX et PDF</span>
          <span className="text-white/70 text-xs">Mis a jour regulierement</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 min-w-44">
        <div className="bg-white/12 border border-white/20 rounded-xl p-3 flex items-center gap-3">
          <div>
            <div className="text-white font-bold text-lg">25+</div>
            <div className="text-white/60 text-xs">modeles disponibles</div>
          </div>
        </div>
        <div className="bg-white/12 border border-white/20 rounded-xl p-3 flex items-center gap-3">
          <div>
            <div className="text-white font-bold text-lg">6</div>
            <div className="text-white/60 text-xs">categories juridiques</div>
          </div>
        </div>
        <div className="bg-white/12 border border-white/20 rounded-xl p-3 flex items-center gap-3">
          <div>
            <div className="text-white font-bold text-lg">100%</div>
            <div className="text-white/60 text-xs">conformes droit francais</div>
          </div>
        </div>
      </div>
    </section>
  )
}