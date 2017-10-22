import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from './Text';
import { LinearGradient } from 'expo';

function Card(props) {
  console.log(props.navigation);
  return (
    <TouchableOpacity onPress={() => props.navigate('Message', { person: '' })}>
      <View
        style={[
          styles.card,
          props.extraMargin === true ? styles.extraMargin : {},
          props.style,
        ]}
      >
        <LinearGradient
          colors={['#DEFF59', '#7EFE63']}
          style={[
            styles.card,
            props.extraMargin === true ? styles.extraMargin : {},
            props.style,
          ]}
        >
          <Text style={styles.text}>{props.children}</Text>
          <Text style={styles.text}>Want to Help?</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
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
  extraMargin: {
    marginTop: 30,
  },
});

export default Card;
