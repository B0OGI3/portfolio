import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>Available for work</div>
      <h1 className={styles.name}>Ian Davis</h1>
      <p className={styles.title}>Full-Stack Software Developer</p>
      <p className={styles.bio}>
        Recent CS grad based in the Wilmington / Elkton area. I build fast,
        production-ready web applications — from real-time multiplayer systems
        to data-driven dashboards. Strong across the full stack with React,
        Node.js, PostgreSQL, and Docker.
      </p>
      <div className={styles.ctas}>
        <a
          href="#projects"
          className={styles.primaryBtn}
        >
          View My Work
        </a>
        <a
          href="https://github.com/B0OGI3"
          target="_blank"
          rel="noreferrer"
          className={styles.ghostBtn}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/iandavis15"
          target="_blank"
          rel="noreferrer"
          className={styles.ghostBtn}
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
