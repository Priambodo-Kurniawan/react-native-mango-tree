import React from 'react';
import { Button, Text, View } from 'react-native'
import { connect } from 'react-redux';

import {
  addOldAction,
} from '../actions'
import renderIf from '../helper/helper';
import TreeImage from '../components/treeImage';

class TreeContainer extends React.Component {
  static navigationOptions = {
    title: 'Tree',
  }
  render() {
    console.log(this.props.tree.tree.treeName);
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          This is {this.props.tree.tree.treeName},
        </Text>
        <Text>
          he is {this.props.tree.tree.old} years old.
        </Text>
        <TreeImage />
        <Button
          title="Emulate"
          onPress = {() => {
            let addOld = this.props.tree.tree.old + 1;
            this.props.addOldAction(addOld);
            console.log(addOld);
          }}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOldAction: (old) => dispatch(addOldAction(old)),
  }
}

const mapStateToProps = (state) => {
  return {
    tree: state.tree,
    user: state.userName,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer);
