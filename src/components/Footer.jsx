import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {year} Doruk Yeşil. {t.footer.tagline}
        </p>
        <button type="button" className="footer__top" onClick={scrollTop}>
          {t.footer.backToTop}
          <ArrowUp size={14} strokeWidth={2} />
        </button>
      </div>
    </footer>
  )
}
