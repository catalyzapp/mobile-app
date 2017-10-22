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
import { GiftedChat } from 'react-native-gifted-chat';
import Screen from '../components/lib/Screen';
import List from '../components/lib/List';
import Button from '../components/lib/Button';
import Card from '../components/lib/Card';
import { screenTabStyles } from '../styles/navigatorStyles';

class Notifications extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
      },
    ],
  };

  static navigationOptions = ({ navigate }) => {
    return {
      headerTitle: 'Matches',
      headerStyle: screenTabStyles,
    };
  };

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      // <Screen style={{ alignItems: 'center' }}>
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      // </Screen>
    );
  }
}

export default Notifications;
