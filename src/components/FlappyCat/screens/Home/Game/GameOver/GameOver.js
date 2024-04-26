import { useEffect } from 'react'
import { View, Image, TouchableWithoutFeedback } from 'react-native'

import { styles } from './GameOverStyle'

import GAME_OVER from '../../../../images/game-over.png'

const GameOver = ({ handlebackToStart }) => {
  useEffect(() => {
    setTimeout(() => {
      handlebackToStart()
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={GAME_OVER} style={styles.logo} />
    </View>
  )
}

export { GameOver }
