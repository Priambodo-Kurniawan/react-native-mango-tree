import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class TreeImage extends React.Component {
  render(){
    if(this.props.tree.tree.old >= 17) {
      return (
        <View>
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: 'center',
              backgroundColor: '#eee'
            }}
            source={require(`../assets/4.png`)}
          />
        </View>
      )
    }
    else if(this.props.tree.tree.old >= 15) {
      return (
        <View>
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: 'center',
              backgroundColor: '#eee'
            }}
            source={require(`../assets/3.png`)}
          />
        </View>
      )
    }
    else if(this.props.tree.tree.old >= 5) {
      return (
        <View>
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: 'center',
              backgroundColor: '#eee'
            }}
            source={require(`../assets/2.png`)}
          />
        </View>
      )
    }
    return (
      <View>
        <Image
          style={{
            width: 300,
            height: 300,
            alignSelf: 'center',
            backgroundColor: '#eee'
          }}
          source={require(`../assets/0.png`)}
        />
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
