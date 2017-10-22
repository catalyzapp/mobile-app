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

function Thread(props) {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 50,
        backgroundColor: 'green',
        padding: 10,
      }}
      onPress={() => props.navigate('Message', { person: '' })}
    >
      <Text>{props.bio}</Text>
    </TouchableOpacity>
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
    threads: [{ bio: "I'm in dire need of help" }],
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
    console.log(this.props);
    return (
      <Screen style={{ alignItems: 'center', width: '100%' }}>
        <List
          data={this.state.threads}
          navigate={this.props.navigation.navigate}
          ui={Thread}
        />
      </Screen>
    );
  }
}

export default Messages;
