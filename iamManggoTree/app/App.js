import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './containers/HomeScreen'
import TreeContainer from './containers/TreeContainer'
import GameOver from './containers/GameOver'

export default App = StackNavigator({
  Home: { screen: HomeScreen},
  TreeContainer: { screen: TreeContainer },
  GameOver: { screen: GameOver }
})
