import { View, Image, TouchableWithoutFeedback } from 'react-native'

import { styles } from './StartStyle'

import LOGO from '../../../../images/logo.png'
import PLAY from '../../../../images/play.png'

const Start = ({ handleOnStartGame }) => {
  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.logo} />
      <TouchableWithoutFeedback onPress={handleOnStartGame}>
        <Image source={PLAY} style={styles.playButton} />
      </TouchableWithoutFeedback>
    </View>
  )
}

export { Start }
