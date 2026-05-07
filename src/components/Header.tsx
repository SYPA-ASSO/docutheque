export default function Header() {
  return (
    <>
      {/* TOP BAR */}
      <div className="bg-navy py-1 px-6 flex justify-between items-center">
        <span className="text-blue-300 text-xs">📞 01 XX XX XX XX — Numéro non surtaxé</span>
        <span className="text-blue-300 text-xs cursor-pointer hover:text-white">Mon espace client</span>
      </div>

      {/* HEADER PRINCIPAL */}
      <nav className="bg-white border-b-2 border-navy-light px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-navy-light rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">⚖</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-navy">Docuthèque</div>
            <div className="text-xs text-gray-400">Vos documents juridiques en ligne</div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex gap-6 items-center">
          <a href="/" className="text-xs font-semibold text-navy-light border-b-2 border-navy-light pb-0.5">Accueil</a>
          <a href="/catalogue" className="text-xs text-gray-600 hover:text-navy">Catalogue</a>
          <a href="/tarifs" className="text-xs text-gray-600 hover:text-navy">Tarifs</a>
          <a href="/blog" className="text-xs text-gray-600 hover:text-navy">Blog juridique</a>
        </div>

        {/* BOUTON */}
        <button className="bg-navy-light text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-navy transition-colors">
          Inscription gratuite
        </button>
      </nav>
    </>
  )
}
