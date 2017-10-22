import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Text from './Text';

// TODO: limit username size to 9

function Listing(props) {
  if (props.grid === false) {
    return (
      <TouchableOpacity style={styles.listingTable}>
        <View style={styles.group}>
          <Image
            source={{ uri: props.img }}
            style={styles.imgTable}
            resizeMode="contain"
          />
          <View>
            <Text size="md" weight="bold" color="#B9B9B9">
              {props.user}
            </Text>
            <Text size="lg">{props.sneaker}</Text>
          </View>
        </View>
        <Text size="lg" weight="bold">
          ${props.price}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.listingGrid}>
      <Image
        source={{ uri: props.img }}
        style={styles.imgGrid}
        resizeMode="contain"
      />
      <View style={styles.group}>
        <View>
          <Text size="sm" weight="bold" color="#B9B9B9">
            {props.user}
          </Text>
          <Text size="md">{props.sneaker}</Text>
        </View>
        <Text size="lg" weight="bold">
          ${props.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create({
  listingGrid: {
    margin: 10,
    width: 140,
  },
  imgGrid: {
    width: 140,
    height: 140,
    borderRadius: 6,
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listingTable: {
    margin: 10,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D0D0D0',
  },
  imgTable: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
});

export default Listing;
