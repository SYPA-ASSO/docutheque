import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Tarifs from './components/Tarifs'
import Footer from './components/Footer'
import SchemaOrg from './components/SchemaOrg'

function App() {
  return (
    <>
      <Helmet>
        <title>Docuthèque — Vos documents juridiques prêts à l'emploi</title>
        <meta name="description" content="Plus de 25 modèles de documents juridiques français rédigés par des juristes : contrats, mises en demeure, RGPD, RH, recouvrement. Téléchargez en DOCX et PDF." />
        <meta name="keywords" content="modèles juridiques, contrats, mise en demeure, RGPD, documents RH, statuts SASU, statuts SARL, juriste en ligne" />
        <meta property="og:title" content="Docuthèque — Vos documents juridiques prêts à l'emploi" />
        <meta property="og:description" content="Plus de 25 modèles de documents juridiques français rédigés par des juristes. Téléchargez en DOCX et PDF." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docutheque.fr" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://docutheque.fr" />
      </Helmet>
      <SchemaOrg />
      <Header />
      <Hero />
      <Categories />
      <About />
      <HowItWorks />
      <Tarifs />
      <Footer />
    </>
  )
}

export default App