import React from 'react';
import { TextInput as TI, StyleSheet } from 'react-native';

function TextInput(props) {
  let style = props.style || {};

  if (props.size === 'sm')
    return (
      <TI
        style={[styles.design, styles.sm, style]}
        onChangeText={props.onChange}
        value={props.value}
        placeholder={props.placeholder || 'Placeholder'}
        multiline={props.multiline}
        autoCapitalize={props.autoCapitalize || 'sentences'}
        autoCorrect={props.autoCorrect || false}
        keyboardType={props.keyboardType || 'default'}
      />
    );

  if (props.size === 'md')
    return (
      <TI
        style={[styles.design, styles.md, style]}
        onChangeText={props.onChange}
        value={props.value}
        placeholder={props.placeholder || 'Placeholder'}
        multiline={props.multiline}
        autoCapitalize={props.autoCapitalize || 'sentences'}
        autoCorrect={props.autoCorrect || false}
        keyboardType={props.keyboardType || 'default'}
      />
    );

  return (
    <TI
      style={[styles.design, styles.lg, style]}
      onChangeText={props.onChange}
      value={props.value}
      placeholder={props.placeholder || 'Placeholder'}
      multiline={props.multiline}
      autoCapitalize={props.autoCapitalize || 'sentences'}
      autoCorrect={props.autoCorrect || false}
      keyboardType={props.keyboardType || 'default'}
    />
  );
}

let styles = StyleSheet.create({
  design: {
    backgroundColor: '#f3f3f3',
    borderRadius: 3,
    padding: 10,
    margin: 3,
    color: '#000',
  },
  sm: {
    height: 40,
    width: 100,
    marginBottom: 12,
  },
  md: {
    height: 40,
    width: 200,
    marginBottom: 12,
  },
  lg: {
    height: 40,
    width: 290,
    marginBottom: 12,
  },
});

export default TextInput;
