import React from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import {
  changeNameAction,
} from '../actions'
import renderIf from '../helper/helper';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    const { navigate } = this.props.navigation;
    // console.log(this.props.tree.tree.treeName);
    return (
      <View>
        <Text>
          Welcome!
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 280,
          }}
          placeholder='Your Name'
          keyboardType='default'
        />
        <TextInput
          style={{
            height: 40,
            width: 280,
          }}
          placeholder='Give your tree name'
          keyboardType='default'
          onChangeText={(text) => {
            console.log(text)
            this.props.changeNameAction(text)
          }}
        />
        {
          renderIf(this.props.tree.tree.treeName !== null,
            <Button
            title="Start"
            onPress = {() => navigate('TreeContainer')}
          ></Button>)
        }
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeNameAction: (name) => dispatch(changeNameAction(name)),
  }
}

const mapStateToProps = (state) => {
  return {
    tree: state.tree,
    user: state.userName,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
