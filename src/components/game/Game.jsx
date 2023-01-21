import { useState, useEffect } from 'react'
import styles from './Game.module.css'

import Icon from '../icon/Icon'
import GameOption from '../gameOption/GameOption'

const winnerTable = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]


function Game() {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(-1)
  const [winner, setWinner] = useState(0)   // const para travar jogo se tiver campeao

  const handleClick = pos => {
    if (gameState[pos] === 0 && winner ===0) {  // logica para bloquear jogo
      let NewGameState = [...gameState]
      NewGameState[pos] = currentPlayer
      
      setGameState(NewGameState)
    }

  }

const verifyGame = ()=>{
winnerTable.forEach((line)=>{
const values = line.map((position)=>gameState[position])
const sum = values.reduce((soma, value) => soma + value) 
console.log(sum)
if(sum === 3 || sum ===-3)setWinner(sum/3)
})
}




useEffect(()=>{
  setCurrentPlayer(currentPlayer * -1)
    verifyGame()
},[gameState])

  return (
    <div className={styles.gameContent}>
      <div className={styles.game}>
        {
          gameState.map((value, pos) =>
            <GameOption
              key={`game-option-pos-${pos}`}
              status={value}
              onClick={() => handleClick(pos)}
            />
          )
        }
      </div>
      <div className={styles.playerContent}>
        <h4>Próximo a Jogar</h4>
        {
          currentPlayer === 1 && <Icon iconName="circle" />
        }
        {
          currentPlayer === -1 && <Icon iconName="x" />
        }
      </div>

      
    </div>
  )
}
export default Game