import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { LinearGradient } from 'expo';

function Card(props) {
  return (
    <LinearGradient colors={['#DEFF59','#7EFE63']} style={styles.card}>
      <Text style={styles.text}>{props.children}</Text>
      <Text style={styles.text}>Wanna Help</Text>
    </LinearGradient>
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
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
  },
});

export default Card;
