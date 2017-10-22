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
        <View>
          <LinearGradient
            colors={['#8430FF', '#D840FF']}
            style={[
              styles.sm,
              props.style,
              props.shadow === true ? styles.shadow : {},
            ]}
          >
            <Text size="md" weight="medium" color={props.txtColor}>
              {props.children}
            </Text>
          </LinearGradient>
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
          <LinearGradient
            colors={['#8430FF', '#D840FF']}
            style={[
              styles.lg,
              props.style,
              props.shadow === true ? styles.shadow : {},
            ]}
          >
            <Text size="md" weight="medium" color={props.txtColor}>
              {props.children}
            </Text>
          </LinearGradient>
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
          <LinearGradient
            colors={['#8430FF', '#D840FF']}
            style={[
              styles.xl,
              props.style,
              props.shadow === true ? styles.shadow : {},
            ]}
          >
            <Text size="md" weight="medium" color={props.txtColor}>
              {props.children}
            </Text>
          </LinearGradient>
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
        <LinearGradient
          colors={['#8430FF', '#D840FF']}
          style={[
            styles.md,
            props.style,
            props.shadow === true ? styles.shadow : {},
          ]}
        >
          <Text size="md" weight="medium" color={props.txtColor}>
            {props.children}
          </Text>
        </LinearGradient>
      </View>
    </TouchableHighlight>
  );
}

let styles = StyleSheet.create({
  sm: {
    borderRadius: 3,
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  md: {
    borderRadius: 3,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lg: {
    borderRadius: 3,
    width: 230,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  xl: {
    borderRadius: 3,
    width: 287,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#696969',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 5,
    shadowRadius: 10,
  },
});

export default Button;
