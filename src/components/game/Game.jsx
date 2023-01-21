import { useState } from 'react'
import styles from './Game.module.css'

import Icon from '../icon/Icon'
import GameOption from '../gameOption/GameOption'



function Game() {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(1)

  const handleClick = pos => {
    if (gameState[pos] === 0) {
      let NewGameState = [...gameState]
      NewGameState[pos] = currentPlayer
      setCurrentPlayer(currentPlayer * -1)
      setGameState(NewGameState)
    }

  }

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