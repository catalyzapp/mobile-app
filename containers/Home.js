import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Screen from '../components/lib/Screen';
import Listing from '../components/lib/Listing';
import List from '../components/lib/List';
import Button from '../components/lib/Button';
import TextInput from '../components/lib/TextInput';
import Card from '../components/lib/Card';
import { screenTabStyles } from '../styles/navigatorStyles';

class HomeScreen extends Component {
  static navigationOptions = ({ navigate }) => {
    return {
      headerTitle: 'Home',
      headerStyle: screenTabStyles,
    };
  };
  render() {
    return (
      <Screen style={{ alignItems: 'center' }}>
        <Card>Some kid who needs a lot of help.</Card>
      </Screen>
    );
  }
}

export default HomeScreen;
