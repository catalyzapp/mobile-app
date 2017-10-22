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
import Swipe from '../components/lib/Swipe';
import TextInput from '../components/lib/TextInput';
import UserIdentity from '../components/lib/UserIdentity';
import { screenTabStyles } from '../styles/navigatorStyles';

class Notifications extends Component {
  static navigationOptions = ({ navigate }) => {
    return {
      headerTitle: 'Home',
      headerStyle: screenTabStyles,
    };
  };
  render() {
    return (
      <Screen>
        <Text>Notifications</Text>
      </Screen>
    );
  }
}

export default Notifications;
