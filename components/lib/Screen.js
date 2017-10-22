import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

function Screen(props) {
  return (
    <ScrollView contentContainerStyle={props.style} style={[styles.wrapper]}>
      {props.children}
    </ScrollView>
  );
}

let styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});

export default Screen;
