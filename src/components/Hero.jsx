import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>Available for work</div>
      <h1 className={styles.name}>Ian Davis</h1>
      <p className={styles.title}>Full-Stack Software Developer</p>
      <p className={styles.bio}>
        Full-stack software engineer with 2+ years of production experience
        shipping real systems — from inventory management platforms to developer
        tooling. Based in the Wilmington / Elkton area, seeking a role where I
        can keep building things that matter.
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
