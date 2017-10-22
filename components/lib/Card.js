import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

function Card(props) {
  return (
    <View style={styles.card}>
      <Text>{props.children}</Text>
      <Text>Wanna Help</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  card: {
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: 6,
    width: '90%',
    height: 230,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
