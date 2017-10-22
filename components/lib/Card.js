import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { LinearGradient } from 'expo';

function Card(props) {
  return (
    <LinearGradient
      colors={['#DEFF59', '#7EFE63']}
      style={[styles.card, props.style, {borderRadius: 10}]}
    >
      <Text style={styles.text}>{props.children}</Text>
      <Text style={styles.text}>Wanna Help</Text>
    </LinearGradient>
  );
}

let styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    width: '90%',
    height: 230,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#C6C6C6',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 5,
    shadowRadius: 10,
    backgroundColor: 'transparent',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    borderRadius: 6,
  },
});

export default Card;
