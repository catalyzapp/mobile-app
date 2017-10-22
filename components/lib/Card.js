import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Text>{props.bio}</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 20,
  },
});
