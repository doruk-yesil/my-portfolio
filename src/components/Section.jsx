import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export function SectionHeading({ eyebrow, heading }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{heading}</h2>
    </motion.div>
  )
}

export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section__inner">{children}</div>
    </section>
  )
}

export { fadeUp }
