import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ArrowDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'

export default function Hero() {
  const { t } = useLanguage()
  const { hero, contact } = t
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    setRoleIndex(0)
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % hero.roles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [hero.roles.length])

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          {hero.name}
        </motion.h1>

        <motion.div
          className="hero__role"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          <span className="hero__role-bracket">{'<'}</span>
          <span className="hero__role-text-wrap">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                className="hero__role-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {hero.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="hero__role-bracket">{'/>'}</span>
        </motion.div>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          className="hero__location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.34 }}
        >
          {hero.location}
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a className="btn btn--primary" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
          </a>
          <a className="btn btn--ghost" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </a>
        </motion.div>

        <motion.div
          className="hero__socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href={contact.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={19} />
          </a>
          <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={19} />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <Mail size={19} strokeWidth={1.8} />
          </a>
        </motion.div>
      </div>

      <motion.a
        className="hero__scroll"
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { duration: 1, delay: 0.9 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span>{hero.scrollHint}</span>
        <ArrowDown size={16} strokeWidth={1.8} />
      </motion.a>
    </section>
  )
}
