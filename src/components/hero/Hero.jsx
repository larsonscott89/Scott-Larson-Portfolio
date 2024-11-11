import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-Dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-Dark.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext.jsx'

function Hero() {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === 'light' ? sun : moon
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  return (
    <section id='hero' className={styles.container}>
     <div className={styles.colorModeContainer}>
      <img 
        className={styles.hero} 
        src={heroImg} 
        alt='Profile image of Scott Larson'
      />
      <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt='Color Mode icon'
        onClick={toggleTheme}
      />
    </div>
    <div className={styles.info}>
      <h1>
        Scott
        <br /> 
        Larson
      </h1>
      <h2>
        Full Stack Developer
      </h2>
      <span>
        <a href='https://www.linkedin.com/in/scottlarson9/' target='_blank'>
          <img src={linkedinIcon} alt='LinkedIn Icon' />
        </a>
        <a href='https://github.com/larsonscott89' target='_blank'>
          <img src={githubIcon} alt='GitHub Icon' />
        </a>
      </span>
      <p className={styles.description}>
      Passionate about crafting innovative web and mobile applications, with a strong commitment to continuous learning and skill development at every opportunity. 
      </p>
      <a href={CV} download>
        <button className='hover'> Resume </button>
      </a>
    </div>
    </section>
  )
}

export default Hero
