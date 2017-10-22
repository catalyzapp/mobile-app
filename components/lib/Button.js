import React from 'react';
import { TouchableHighlight, StyleSheet, View } from 'react-native';
import Text from './Text';
import { LinearGradient } from 'expo';


function Button(props) {
  if (props.size === 'sm')
    return (
      <TouchableHighlight
        style={[styles.sm, props.style]}
        onPress={props.onPress}
        underlayColor="rgba(0,0,0,0.05)"
      >
        <LinearGradient
          colors={['#8430FF','#D840FF']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 6 }}>
          <Text size="md" weight="medium" color={props.txtColor}>
            {props.children}
          </Text>
          
        </LinearGradient>
      </TouchableHighlight>
    );

  if (props.size === 'lg')
    return (
      <TouchableHighlight
        style={[styles.lg, props.style]}
        onPress={props.onPress}
        underlayColor="rgba(0,0,0,0.05)"
      >
        <LinearGradient
          colors={['#8430FF','#D840FF']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 6 }}>
          <Text size="lg" weight="medium" color={props.txtColor}>
            {props.children}
          </Text>

        </LinearGradient>
      </TouchableHighlight>
    );

  if (props.size === 'xl')
    return (
      <TouchableHighlight
        style={[styles.xl, props.style]}
        onPress={props.onPress}
        underlayColor="rgba(0,0,0,0.05)"
      >
        <LinearGradient
          colors={['#8430FF','#D840FF']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <Text size="lg" weight="medium" color={props.txtColor}>
            {props.children}
          </Text>

        </LinearGradient>
      </TouchableHighlight>
    );

  return (
    <TouchableHighlight
      style={[styles.md, props.style]}
      onPress={props.onPress}
      underlayColor="rgba(0,0,0,0.05)"
    >
      <LinearGradient
        colors={['#8430FF','#D840FF']}
        style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
        <Text size="md" weight="medium" color={props.txtColor}>
          {props.children}
        </Text>

      </LinearGradient>
    </TouchableHighlight>
  );
}

let styles = StyleSheet.create({
  sm: {
    borderRadius: 3,
    backgroundColor: 'transparent',
    borderWidth: 1,
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
  },
  md: {
    borderRadius: 3,
    backgroundColor: 'transparent',
    borderWidth: 1,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
  },
  lg: {
    borderRadius: 3,
    backgroundColor: 'transparent',
    borderWidth: 1,
    width: 230,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
  },
  xl: {
    borderRadius: 3,
    backgroundColor: 'transparent',
    borderWidth: 1,
    width: 287,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
  },
});

export default Button;
