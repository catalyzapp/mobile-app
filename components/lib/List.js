import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class List extends Component {
  state = {
    grid: true,
  };

  renderMenu = () => {
    if (this.props.layoutOptions) {
      return (
        <View style={styles.horizontal}>
          <TouchableOpacity
            onPress={() => this.setState(() => ({ grid: true }))}
          >
            <Text>{this.state.grid === true ? 'GRID' : 'grid'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState(() => ({ grid: false }))}
          >
            <Text>{this.state.grid === true ? 'table' : 'TABLE'}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  render() {
    let Ui = this.props.ui;
    if (this.props.grid === false || this.state.grid === false) {
      return (
        <View>
          {this.renderMenu()}
          <FlatList
            key="table"
            data={this.props.data}
            style={{ flex: 1 }}
            renderItem={({ item }) => <Ui {...item} grid={false} />}
            keyExtractor={(item, index) => item.id || index}
          />
        </View>
      );
    }

    return (
      <View>
        {this.renderMenu()}
        <FlatList
          key="grid"
          numColumns="2"
          data={this.props.data}
          style={{ flex: 1 }}
          renderItem={({ item }) => <Ui {...item} grid={true} />}
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
