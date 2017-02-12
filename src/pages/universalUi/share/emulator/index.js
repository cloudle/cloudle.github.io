import React, { Component } from 'react';
import { Image, View, ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export default class AppEmulator extends Component {

  render () {
    return <View style={styles.container}>
      {this.props.children}
      <View style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 64,
        backgroundColor: '#00bcd4'}}/>
      <Image
        resizeMode={Image.resizeMode.contain}
        style={styles.statusBar}
        source={require('./ios-statusbar-light.png')}/>
    </View>
  }
}

const emulatorSize = {
  width: 320, height: 568,
};

const styles = StyleSheet.create({
  container: {
    ...emulatorSize,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#292929',
  },
  statusBar: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 24,
  }
});