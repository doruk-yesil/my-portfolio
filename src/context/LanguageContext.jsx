import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import content from '../data/content.js'

const LanguageContext = createContext(null)

function getInitialLang() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem('lang')
  if (stored === 'en' || stored === 'tr') return stored
  const nav = window.navigator?.language?.toLowerCase() ?? ''
  return nav.startsWith('tr') ? 'tr' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'tr' : 'en'))

  const t = useMemo(() => content[lang], [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
