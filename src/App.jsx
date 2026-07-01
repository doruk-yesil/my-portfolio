import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { LanguageProvider, useLanguage } from './context/LanguageContext.jsx'
import BackgroundFX from './components/BackgroundFX.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function DocumentMeta() {
  const { t } = useLanguage()
  useEffect(() => {
    document.title = t.meta.title
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', t.meta.description)
  }, [t])
  return null
}

function Page() {
  return (
    <>
      <DocumentMeta />
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Page />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
