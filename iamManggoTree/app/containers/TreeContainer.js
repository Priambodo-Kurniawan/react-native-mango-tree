import React from 'react';
import { Button, Text, View } from 'react-native'

class TreeContainer extends React.Component {
  static navigationOptions = {
    title: 'Tree',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          Your Tree here
        </Text>
        <Button
          title="Game Over"
          onPress = {() => navigate('GameOver')}
        />
      </View>
    )
  }
}

export default TreeContainer;
