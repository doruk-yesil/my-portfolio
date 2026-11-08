import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function ProjectCard({ project, index }) {
  const { t } = useLanguage()
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <div className="project-card__glow" />
      <div className="project-card__body">
        <p className="project-card__subtitle">{project.subtitle}</p>
        <h3 className="project-card__title">{project.title}</h3>
        {project.meta && <p className="project-card__meta">{project.meta}</p>}
        <p className="project-card__desc">{project.description}</p>
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.links?.length > 0 && (
          <div className="project-card__links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label || (link.private ? t.projects.privateSourceLabel : t.projects.sourceLabel)}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}
