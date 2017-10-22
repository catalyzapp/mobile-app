import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { translate, Trans } from 'react-i18next';
import Screen from '../components/lib/Screen';
import Listing from '../components/lib/Listing';
import List from '../components/lib/List';
import Button from '../components/lib/Button';
import TextInput from '../components/lib/TextInput';
import Text from '../components/lib/Text';
import Card from '../components/lib/Card';
import { screenTabStyles } from '../styles/navigatorStyles';
import { logIn, getAuth, setAuth } from '../navigation/utils';

class Home extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      headerLeft: (
        <Text
          size="xl"
          weight="bold"
          style={{ paddingTop: 30, paddingBottom: 20 }}
        >
          {screenProps.t('home:title')}
        </Text>
      ),
      headerStyle: screenTabStyles,
    };
  };

  state = {
    recommendations: [],
  };

  async componentDidMount() {
    let account = await getAuth();
    if (account === false) {
      this.props.navigation.navigate('Landing');
    }

    let res = await fetch(`https://mywebsite.com/matchup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        facebook_id: account.fbId,
      }),
    });

    this.setState(() => ({ recommendations: res.recommendations }));
  }

  render() {
    return (
      <Screen style={{ alignItems: 'center' }}>
        <List
          data={this.state.recommendations}
          navigate={this.props.navigation.navigate}
          ui={Card}
        />
      </Screen>
    );
  }
}

export default translate(['home', 'common'], { wait: true })(Home);
