import React from 'react';
import { Text as T, StyleSheet } from 'react-native';

function Text(props) {
  let weight = styles.normal,
    size = styles.md;
  if (props.weight === 'light') weight = styles.light;

  if (props.weight === 'bold') weight = styles.bold;

  if (props.weight === 'medium') weight = styles.medium;

  if (props.size === 'sm') size = styles.sm;

  if (props.size === 'lg') size = styles.lg;

  if (props.size === 'xl') size = styles.xl;

  return (
    <T style={[size, weight, { color: props.color }, props.style]}>
      {props.children}
    </T>
  );
}

let styles = StyleSheet.create({
  bold: {
    fontWeight: '800',
  },
  medium: {
    fontWeight: '600',
  },
  normal: {
    fontWeight: '400',
  },
  light: {
    fontWeight: '200',
  },
  sm: {
    fontSize: 12,
  },
  md: {
    fontSize: 14,
  },
  lg: {
    fontSize: 18,
  },
  xl: {
    fontSize: 24,
  },
});

export default Text;
