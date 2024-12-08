import styles from './NavbarStyles.module.css'

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={() => scrollToSection('about')} className={styles.navItem}>
        <h1>About Me</h1>
      </div>
      <div onClick={() => scrollToSection('projects')} className={styles.navItem}>
        <h1>Projects</h1>
      </div>
      <div onClick={() => scrollToSection('skills')} className={styles.navItem}>
        <h1>Skills</h1>
      </div>
      <div onClick={() => scrollToSection('contact')} className={styles.navItem}>
        <h1>Contact Me</h1>
      </div>
    </div>
  )
}

export default Navbar