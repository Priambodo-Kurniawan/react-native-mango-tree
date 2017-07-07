import React from 'react';
import { Button, Text, View, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux';

import {
  addOldAction,
  harvestAction,
} from '../actions'
import renderIf from '../helper/helper';
import TreeImage from '../components/treeImage';
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  textTree: {
    justifyContent: 'center',
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
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
        <Text style={styles.textTree}>
          This is {this.props.tree.tree.treeName},
        </Text>
        <Text style={styles.textTree}>
          he is {this.props.tree.tree.old} years old.
        </Text>
        <Text style={styles.textTree}>
          ({this.props.tree.tree.fruit})
        </Text>
        <TreeImage />

        {
          renderIf(this.props.tree.tree.fruit == 0,
            <View style={{marginBottom: 20}}>
              <Button
                title="Emulate"
                onPress = {() => {
                  let addOld = this.props.tree.tree.old + 1;
                  this.props.addOldAction(addOld);
                  console.log(addOld);
                }}
              ></Button>
            </View>)
        }
        {
          renderIf(this.props.tree.tree.old >= 17,
            <Button
            title="Harvest"
            onPress = {() => {
              this.props.harvestAction(20)
            }}
          ></Button>)
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
