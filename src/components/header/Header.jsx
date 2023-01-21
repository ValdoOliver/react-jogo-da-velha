import styles from '../header/Header.module.css'

import Title from '../title/Title'
import SubTitle from '../subtitle/SubTitle'
import Icon from '../icon/Icon'

function Header() {
  return (
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <SubTitle>Criado por Edvaldo Oliveira</SubTitle>
       <div className={styles.iconContent}>
        <Icon iconName="github" link= "https://github.com/valodoliver"/>
       </div>
    </div>
  )
}


export default Header