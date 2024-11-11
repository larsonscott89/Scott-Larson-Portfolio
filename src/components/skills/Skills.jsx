import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList 
          src={checkMarkIcon}
          skill='HTML'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='CSS'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='SCSS/SASS'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='JavaScript'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='TypeScript'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='Node'
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList 
          src={checkMarkIcon}
          skill='REACT.js'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='Vue.js'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='Python'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='Django'
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList 
          src={checkMarkIcon}
          skill='AtlasDB'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='FireBase'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='GitHub'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='ClickUp'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='Figma'
        />
        <SkillList 
          src={checkMarkIcon}
          skill='Trello'
        />
      </div>
      <hr />
    </section>
  )
}

export default Skills
