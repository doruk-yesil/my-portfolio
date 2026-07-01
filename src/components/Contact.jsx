import { motion } from 'framer-motion'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import Section, { SectionHeading, fadeUp } from './Section.jsx'
import { GithubIcon, LinkedinIcon } from './BrandIcons.jsx'

export default function Contact() {
  const { t } = useLanguage()
  const { contact } = t

  const items = [
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, '')}` },
    { icon: LinkedinIcon, label: contact.linkedin, href: contact.linkedinUrl },
    { icon: GithubIcon, label: contact.github, href: contact.githubUrl },
  ]

  return (
    <Section id="contact">
      <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} />

      <motion.p
        className="contact__desc"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        {contact.description}
      </motion.p>

      <motion.div
        className="contact__grid"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {items.map(({ icon: Icon, label, href }) => (
          <a className="contact__card" key={label} href={href} target="_blank" rel="noreferrer">
            <span className="contact__card-icon">
              <Icon size={18} strokeWidth={1.8} />
            </span>
            <span className="contact__card-label">{label}</span>
            <ArrowUpRight size={15} strokeWidth={1.8} className="contact__card-arrow" />
          </a>
        ))}
      </motion.div>

      <motion.a
        className="btn btn--primary contact__cta"
        href={contact.cta.href}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {contact.cta.label}
      </motion.a>
    </Section>
  )
}
