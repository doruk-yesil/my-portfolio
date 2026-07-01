import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext.jsx'
import Section, { SectionHeading, fadeUp } from './Section.jsx'

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <Section id="about">
      <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />

      <div className="about__grid">
        <motion.div
          className="about__text"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <motion.div
          className="about__facts"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {about.facts.map((fact) => (
            <div className="about__fact" key={fact.label}>
              <span className="about__fact-label">{fact.label}</span>
              <span className="about__fact-value">{fact.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
