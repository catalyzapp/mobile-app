import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

function UserIdentity(props) {
  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: props.img }}
        style={styles.img}
        resizeMode="contain"
      />
      <Text size="lgm">{props.user}</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  img: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default UserIdentity;
