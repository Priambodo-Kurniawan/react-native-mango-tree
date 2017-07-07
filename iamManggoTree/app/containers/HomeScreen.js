import React from 'react';
import { Button, Text, View } from 'react-native'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          Welcome!
        </Text>
        <Button
          title="Start"
          onPress = {() => navigate('TreeContainer')}
        />
      </View>
    )
  }
}

export default HomeScreen;
