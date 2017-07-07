import React from 'react';
import { Text, View } from 'react-native'

class GameOver extends React.Component {
  static navigationOptions = {
    title: 'GameOver',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          Game Over
        </Text>
      </View>
    )
  }
}

export default GameOver;
