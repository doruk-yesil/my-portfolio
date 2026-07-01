import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import Section, { SectionHeading, fadeUp } from './Section.jsx'

export default function Experience() {
  const { t } = useLanguage()
  const { experience } = t

  return (
    <Section id="experience">
      <SectionHeading eyebrow={experience.eyebrow} heading={experience.heading} />

      <div className="timeline">
        <div className="timeline__group">
          <h3 className="timeline__group-title">
            <GraduationCap size={17} strokeWidth={1.8} />
            {experience.educationLabel}
          </h3>
          {experience.education.map((edu, i) => (
            <motion.div
              className="timeline__item"
              key={edu.school}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="timeline__dot" />
              <div className="timeline__content">
                <div className="timeline__row">
                  <h4>{edu.school}</h4>
                  <span className="timeline__period">{edu.period}</span>
                </div>
                <p className="timeline__role">{edu.degree}</p>
                <p className="timeline__location">{edu.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="timeline__group">
          <h3 className="timeline__group-title">
            <Briefcase size={17} strokeWidth={1.8} />
            {experience.workLabel}
          </h3>
          {experience.work.map((job, i) => (
            <motion.div
              className="timeline__item"
              key={job.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="timeline__dot" />
              <div className="timeline__content">
                <div className="timeline__row">
                  <h4>{job.role}</h4>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__role">
                  {job.company} · {job.location}
                </p>
                <ul className="timeline__bullets">
                  {job.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
                <ul className="timeline__tags">
                  {job.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
