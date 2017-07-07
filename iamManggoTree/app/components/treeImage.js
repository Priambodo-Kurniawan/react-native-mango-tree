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
              width: 500,
              height: 500,
              alignSelf: 'center',
              backgroundColor: '#eee'
            }}
            source={require(`../assets/4.png`)}
          />
        </View>
      )
    }
    return (
      <View>
        <Image
          style={{
            width: 500,
            height: 500,
            alignSelf: 'center',
            backgroundColor: '#eee'
          }}
          source={{uri: `../assets/0.png`}}
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
