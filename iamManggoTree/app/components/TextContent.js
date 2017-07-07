import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  textTree: {
    justifyContent: 'center',
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  }
});

class TreeImage extends React.Component {
  render(){
    if(this.props.tree.tree.old >= 23) {
      return (
        <View>
          <Text style={styles.textTree}>
            You just found {this.props.tree.tree.treeName},
            And he's dead.
          </Text>
          <Text style={styles.textTree}>
            He's old anyway...
          </Text>
          <Text style={styles.textTree}>
            (0)
          </Text>
        </View>
      )
    }
    else if(this.props.tree.tree.old >= 17) {
      return (
        <View>
          <Text style={styles.textTree}>
            Now you can harvest {this.props.tree.tree.treeName}!
          </Text>
          <Text style={styles.textTree}>
            Let celebrate his {this.props.tree.tree.old} birthday!
          </Text>
          <Text style={styles.textTree}>
            ({this.props.tree.tree.fruit})
          </Text>
        </View>
      )
    }
    else if(this.props.tree.tree.old >= 15) {
      return (
        <View>
          <Text style={styles.textTree}>
            {this.props.tree.tree.treeName} getting older.
          </Text>
          <Text style={styles.textTree}>
            He is now {this.props.tree.tree.old} years old.
          </Text>
          <Text style={styles.textTree}>
            (0)
          </Text>
        </View>
      )
    }
    else if(this.props.tree.tree.old >= 5) {
      return (
        <View>
          <Text style={styles.textTree}>
            {this.props.tree.tree.treeName} has grown.
          </Text>
          <Text style={styles.textTree}>
            He is now {this.props.tree.tree.old} years old.
          </Text>
          <Text style={styles.textTree}>
            (0)
          </Text>
        </View>
      )
    }
    return (
      <View>
        <Text style={styles.textTree}>
          This is {this.props.tree.tree.treeName},
        </Text>
        <Text style={styles.textTree}>
          he is {this.props.tree.tree.old} years old.
        </Text>
        <Text style={styles.textTree}>
          (0)
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tree: state.tree,
  }
}

export default connect(mapStateToProps, null)(TreeImage);
