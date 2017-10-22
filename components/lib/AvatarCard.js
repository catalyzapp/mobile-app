import React from 'react';
import { Image, StyleSheet } from 'react-native';

function AvatarCard(props) {
  return (
    <Image
      source={{ uri: props.img }}
      style={styles.img}
      resizeMode="contain"
    />
  );
}

let styles = StyleSheet.create({
  img: {
    width: 310,
    height: 290,
    borderRadius: 6,
  },
});

export default AvatarCard;
