import React, { Component } from 'react';
import { Image, View, ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export default class AppEmulator extends Component {

  render () {
    return <View style={styles.container}>
      {this.props.children}
      <Image
        resizeMode={Image.resizeMode.contain}
        style={styles.statusBar}
        source={require('./ios-statusbar-light.png')}/>
    </View>
  }
}

const emulatorSize = {
  width: 375, height: 667,
};

const styles = StyleSheet.create({
  container: {
    ...emulatorSize,
    borderRadius: 3,
    overflow: 'hidden',
  },
  statusBar: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 24,
    backgroundColor: '#333'
  }
});