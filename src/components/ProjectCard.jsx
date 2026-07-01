import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
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
      </div>
    </motion.article>
  )
}
