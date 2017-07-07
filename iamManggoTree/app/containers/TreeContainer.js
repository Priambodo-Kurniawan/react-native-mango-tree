import React from 'react';
import { Button, Text, View, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux';

import {
  addOldAction,
  harvestAction,
} from '../actions'
import renderIf from '../helper/helper';
import TreeImage from '../components/treeImage';
import TextContent from '../components/TextContent';
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#23ab83',
    padding: 30,
    height: window.height-80,
  }
});

class TreeContainer extends React.Component {
  static navigationOptions = {
    title: 'Tree',
  }
  render() {
    // console.log(this.props.tree.tree.treeName);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextContent />
        <TreeImage />
        {
          renderIf(this.props.tree.tree.old <= 23,
            <View style={{marginBottom: 20}}>
              <Button
                title="Emulate"
                onPress = {() => {
                  let addOld = this.props.tree.tree.old + 1;
                  this.props.addOldAction(addOld);
                }}
              ></Button>
            </View>)
        }
        {
          renderIf(this.props.tree.tree.old >= 17,
            <View>
              <Button
                title="Harvest"
                onPress = {() => {
                  this.props.harvestAction(this.props.tree.tree.fruit)
                }}
              ></Button>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 16, marginTop: 30}}>You Harvest: {this.props.tree.tree.basket} fruits</Text>
            </View>)
        }
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOldAction: (old) => dispatch(addOldAction(old)),
    harvestAction: (fruit) => dispatch(harvestAction(fruit)),
  }
}

const mapStateToProps = (state) => {
  return {
    tree: state.tree,
    user: state.userName,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer);
