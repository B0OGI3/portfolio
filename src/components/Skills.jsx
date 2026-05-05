import styles from './Skills.module.css'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'HTML / CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Fastify', 'REST APIs', 'GraphQL', 'Socket.io'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'Redis', 'Firestore'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Git', 'Vercel', 'Linux'],
  },
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <p className="section-label">Toolkit</p>
      <h2 className={styles.heading}>Skills</h2>
      <p className={styles.sub}>
        Technologies I work with day-to-day and reach for when the job calls for it.
      </p>
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.category} className={styles.group}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item} className={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
