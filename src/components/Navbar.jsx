import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Languages } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a
          className="navbar__brand"
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
        >
          <span className="navbar__brand-mark">DY</span>
          <span className="navbar__brand-name">Doruk Yeşil</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {t.nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, `#${link.id}`)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__pill"
            onClick={toggleLang}
            aria-label="Toggle language"
            title={lang === 'en' ? 'Türkçe’ye geç' : 'Switch to English'}
          >
            <Languages size={15} strokeWidth={2} />
            <span>{lang === 'en' ? 'EN' : 'TR'}</span>
          </button>

          <button
            type="button"
            className="navbar__icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />}
          </button>

          <button
            type="button"
            className="navbar__icon-btn navbar__icon-btn--menu"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="navbar__mobile" aria-label="Mobile">
          {t.nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, `#${link.id}`)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
