import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class List extends Component {
  render() {
    let Ui = this.props.ui;

    return (
      <View>
        <FlatList
          data={this.props.data}
          style={{ flex: 1 }}
          renderItem={({ item }) => <Ui {...item} />}
          keyExtractor={(item, index) => index + 1}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  horizontal: {
    alignSelf: 'center',
    width: 60,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 25,
    height: 25,
  },
});

export default List;
