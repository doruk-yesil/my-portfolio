import { useLanguage } from '../context/LanguageContext.jsx'
import Section, { SectionHeading } from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const { t } = useLanguage()
  const { projects } = t

  return (
    <Section id="projects">
      <SectionHeading eyebrow={projects.eyebrow} heading={projects.heading} />

      <div className="projects__grid">
        {projects.items.map((project, i) => (
          <ProjectCard project={project} index={i} key={project.id} />
        ))}
      </div>
    </Section>
  )
}
