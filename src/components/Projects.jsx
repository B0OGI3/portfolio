import styles from './Projects.module.css'

const projects = [
  {
    name: 'MOVESYNC',
    description:
      'Real-time multiplayer chess with spectator mode, live emoji reactions, in-game chat, and sound effects. Handles concurrent game sessions with Socket.io rooms and server-side move validation.',
    tags: ['React', 'Node.js', 'Socket.io', 'Express'],
    demo: 'https://movesync-app.vercel.app',
    repo: 'https://github.com/B0OGI3/MOVESYNC',
    featured: true,
  },
  {
    name: 'Batch Order Management System',
    description:
      'Production order management platform for a manufacturing operation. Handles customer orders, batch routing, workstation confirmations, and inspection workflows with QuickBooks OAuth integration.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'QuickBooks API'],
    demo: null,
    repo: 'https://github.com/B0OGI3/des-boms',
    featured: true,
  },
  {
    name: 'Dev Dashboard',
    description:
      'Visualizes any GitHub user\'s contribution history, language breakdown, and top repositories. Combines GitHub\'s REST and GraphQL APIs for comprehensive profile analysis.',
    tags: ['React', 'GraphQL', 'REST API', 'Vercel'],
    demo: 'https://dev-dashboard-eight-liart.vercel.app',
    repo: 'https://github.com/B0OGI3/dev-dashboard',
    featured: true,
  },
  {
    name: 'URL Shortener',
    description:
      'Production-grade URL shortener with click analytics. Built with a focus on performance and observability — Fastify for the API layer, Kysely as the query builder, Redis for caching, and a React front-end.',
    tags: ['React', 'Fastify', 'PostgreSQL', 'Redis', 'Kysely'],
    demo: null,
    repo: 'https://github.com/B0OGI3/url-shortener',
    featured: false,
  },
]

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-label">Work</p>
      <h2 className={styles.heading}>Projects</h2>
      <p className={styles.sub}>
        Things I've built — from real-time systems to developer tools.
      </p>
      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.name} className={`${styles.card} ${p.featured ? styles.featured : ''}`}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
            </div>
            <div className={styles.cardBottom}>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <div className={styles.cardLinks}>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className={styles.link}>
                    <ExternalIcon /> Live Demo
                  </a>
                )}
                <a href={p.repo} target="_blank" rel="noreferrer" className={styles.link}>
                  <GithubIcon /> Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
