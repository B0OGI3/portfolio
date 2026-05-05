import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 640) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={styles.nav}>
        <span className={styles.logo}>Ian Davis</span>

        {/* Desktop links */}
        <ul className={styles.links}>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="/resume.pdf" download className={styles.resumeBtn}>Resume</a>
          </li>
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.overlay} onClick={close}>
          <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
            <ul className={styles.drawerLinks}>
              <li><a href="#projects" onClick={close}>Projects</a></li>
              <li><a href="#skills" onClick={close}>Skills</a></li>
              <li><a href="#contact" onClick={close}>Contact</a></li>
              <li>
                <a href="/resume.pdf" download onClick={close} className={styles.drawerResume}>
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
