import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>Ian Davis</span>
      <ul className={styles.links}>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="/resume.pdf"
            download
            className={styles.resumeBtn}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}
