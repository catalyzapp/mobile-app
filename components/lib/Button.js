import React from 'react';
import { TouchableHighlight, StyleSheet, View } from 'react-native';
import Text from './Text';

function Button(props) {
  if (props.size === 'sm')
    return (
      <TouchableHighlight
        style={[styles.sm, props.style]}
        onPress={props.onPress}
        underlayColor="rgba(0,0,0,0.05)"
      >
        <View>
          <Text size="md" weight="medium" color={props.txtColor}>
            {props.children}
          </Text>
        </View>
      </TouchableHighlight>
    );

  if (props.size === 'lg')
    return (
      <TouchableHighlight
        style={[styles.lg, props.style]}
        onPress={props.onPress}
        underlayColor="rgba(0,0,0,0.05)"
      >
        <View>
          <Text size="lg" weight="medium" color={props.txtColor}>
            {props.children}
          </Text>
        </View>
      </TouchableHighlight>
    );

  if (props.size === 'xl')
    return (
      <TouchableHighlight
        style={[styles.xl, props.style]}
        onPress={props.onPress}
        underlayColor="rgba(0,0,0,0.05)"
      >
        <View>
          <Text size="lg" weight="medium" color={props.txtColor}>
            {props.children}
          </Text>
        </View>
      </TouchableHighlight>
    );

  return (
    <TouchableHighlight
      style={[styles.md, props.style]}
      onPress={props.onPress}
      underlayColor="rgba(0,0,0,0.05)"
    >
      <View>
        <Text size="md" weight="medium" color={props.txtColor}>
          {props.children}
        </Text>
      </View>
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
