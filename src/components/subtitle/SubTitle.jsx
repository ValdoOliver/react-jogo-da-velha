import styles from './SubTitle.module.css'

function SubTitle({ children }){
  return (
    <h6 className={styles.subtitle}>{children}</h6>
    )
  
  }

export default SubTitle 