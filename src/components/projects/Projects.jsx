import React from 'react'
import pixelFlix from '../../assets/PixelFlix-logo.jpg'
import gamingElite from '../../assets/GamingElite-logo.png'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'> Projects </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={pixelFlix}
          link='https://pixelflix-88050.firebaseapp.com/login'
          h3='PixelFlix'
          p='Streaming App clone'
        />

        <ProjectCard 
          src={gamingElite}
          link='https://gaming-elite-1eej.onrender.com/'
          h3='Gaming Elite'
          p='Video Game eCommerce Store'
        />
      </div>
    </section>
  )
}

export default Projects
