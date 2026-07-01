import { motion } from 'framer-motion'
import {
  Code2, LayoutTemplate, Server, Database, BrainCircuit, Wrench,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import Section, { SectionHeading, fadeUp } from './Section.jsx'

const ICONS = [Code2, LayoutTemplate, Server, Database, BrainCircuit, Wrench]

export default function Skills() {
  const { t } = useLanguage()
  const { skills } = t

  return (
    <Section id="skills">
      <SectionHeading eyebrow={skills.eyebrow} heading={skills.heading} />

      <div className="skills__grid">
        {skills.categories.map((cat, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <motion.div
              className="skills__card"
              key={cat.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="skills__card-head">
                <span className="skills__icon">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <h3>{cat.title}</h3>
              </div>
              <ul className="skills__tags">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
