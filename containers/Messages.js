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
import { getAuth, setAuth } from '../navigation/utils';
import { screenTabStyles } from '../styles/navigatorStyles';


function Thread (props {
  return (
    <View>
      <Text>{props.bio}</Text>
    </View>
  );
}

class Messages extends Component {
  static navigationOptions = ({ navigate }) => {
    return {
      headerTitle: 'Conversations',
      headerStyle: screenTabStyles,
    };
  };

  state = {
    threads: [

    ],
  };

  async componentDidMount() {
    let account = getAuth();

    // let res = await fetch(`https://mywebsite.com/history/`, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     facebook_id: account.facebook_id,
    //   }),
    // });

    // this.setState(() => ({ threads: res.conversations }));
  }

  render() {
    return (
      <Screen style={{ alignItems: 'center' }}>
        <List data={this.state.threads} ui={Thread}/>
      </Screen>
    );
  }
}

export default Messages;
