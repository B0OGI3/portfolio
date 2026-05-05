import { useState, useEffect } from 'react'
import styles from './Projects.module.css'

const SORT_OPTIONS = [
  { key: 'updated', label: 'Last Updated' },
  { key: 'name', label: 'Name' },
  { key: 'stars', label: 'Stars' },
]

const EXCLUDED_TOPICS = new Set(['portfolio'])
const MAX_TAGS = 5

const NAME_OVERRIDES = {
  MOVESYNC: 'MoveSync',
}

function formatRepoName(name) {
  if (NAME_OVERRIDES[name]) return NAME_OVERRIDES[name]
  return name
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ProjectSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={`${styles.skeletonLine} ${styles.skeletonTitle}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonDesc}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonDesc} ${styles.skeletonShort}`} />
      <div className={styles.skeletonTags}>
        <div className={styles.skeletonTag} />
        <div className={styles.skeletonTag} />
        <div className={styles.skeletonTag} />
      </div>
    </div>
  )
}

function sortRepos(repos, sortBy) {
  return [...repos].sort((a, b) => {
    if (sortBy === 'updated') return new Date(b.pushed_at) - new Date(a.pushed_at)
    if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sortBy, setSortBy] = useState('updated')

  useEffect(() => {
    fetch('https://api.github.com/users/B0OGI3/repos?per_page=100')
      .then((r) => {
        if (!r.ok) throw new Error('GitHub API error')
        return r.json()
      })
      .then((data) => {
        const portfolio = data.filter((r) => r.topics?.includes('portfolio'))
        setRepos(portfolio)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  const sorted = sortRepos(repos, sortBy)

  return (
    <section id="projects">
      <p className="section-label">Work</p>
      <div className={styles.header}>
        <div>
          <h2 className={styles.heading}>Projects</h2>
          <p className={styles.sub}>Things I've built — from real-time systems to developer tools.</p>
        </div>
        <div className={styles.sortBar}>
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              className={`${styles.sortBtn} ${sortBy === opt.key ? styles.sortActive : ''}`}
              onClick={() => setSortBy(opt.key)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className={styles.error}>Couldn't load projects — check back soon.</p>
      )}

      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <ProjectSkeleton key={i} />)
          : sorted.map((repo) => {
              const tags = (repo.topics?.filter((t) => !EXCLUDED_TOPICS.has(t)) ?? []).slice(0, MAX_TAGS)
              return (
                <article key={repo.id} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.cardTitleRow}>
                      <h3 className={styles.cardTitle}>{formatRepoName(repo.name)}</h3>
                      {repo.stargazers_count > 0 && (
                        <span className={styles.stars}>
                          <StarIcon /> {repo.stargazers_count}
                        </span>
                      )}
                    </div>
                    <p className={styles.cardDesc}>
                      {repo.description ?? 'No description provided.'}
                    </p>
                  </div>
                  <div className={styles.cardBottom}>
                    {tags.length > 0 && (
                      <div className={styles.tags}>
                        {tags.map((t) => (
                          <span key={t} className={styles.tag}>{t}</span>
                        ))}
                      </div>
                    )}
                    <div className={styles.cardLinks}>
                      {repo.homepage && (
                        <a href={repo.homepage} target="_blank" rel="noreferrer" className={styles.link}>
                          <ExternalIcon /> Live Demo
                        </a>
                      )}
                      <a href={repo.html_url} target="_blank" rel="noreferrer" className={styles.link}>
                        <GithubIcon /> Code
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
      </div>
    </section>
  )
}
