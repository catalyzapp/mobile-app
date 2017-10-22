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
    if (this.props.small === true) {
      return (
        <FlatList
          data={this.props.data}
          style={{ flex: 1, width: '90%', padding: 20 }}
          renderItem={({ item }) => (
            <Ui navigate={this.props.navigate} small={true} {...item} />
          )}
          keyExtractor={(item, index) => index + 1}
        />
      );
    }
    return (
      <FlatList
        data={this.props.data}
        style={{ flex: 1, width: '90%' }}
        renderItem={({ item }) => (
          <Ui navigate={this.props.navigate} {...item} />
        )}
        keyExtractor={(item, index) => index + 1}
      />
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
