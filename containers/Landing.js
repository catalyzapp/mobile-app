import React, { Component } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import Screen from '../components/lib/Screen';
import Button from '../components/lib/Button';
import { logIn, getAuth, setAuth } from '../navigation/utils';

class Landing extends Component {
  static navigationOptions = {
    headerStyle: { display: 'none' },
  };

  async componentDidMount() {
    // let authed = await getAuth();
    //
    // if (authed.dob && authed.dob !== '') {
    //   this.props.navigation.navigate('Home');
    // }
  }

  state = {
    loginState: '',
  };

  doLogin = async () => {
    try {
      const { getUser } = this.props;
      let isLoggedIn = await logIn();

      // if (accountExists.data.User && accountExists.data.User.dob) {
      //   setAuth(accountExists.data.User);
      this.props.navigation.navigate('Home');
      // } else if (isLoggedIn) {
      //   this.props.navigation.navigate('CompleteLogin');
      // }
    } catch (e) {
      console.log(e);
      Alert.alert('Failure', 'Failed to login with fb');
    } finally {
      // do loading
    }
  };

  render() {
    return (
      <Screen style={styles.container}>
        <Image
          style={styles.img}
          source={require('../assets/images/splash.png')}
          resizeMode="contain"
        />
        <View style={styles.btnContainer}>
          <Button size="lg" onPress={this.doLogin}>
            Login with Facebook
          </Button>
        </View>
      </Screen>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 2,
    width: 260,
    height: 260,
  },
  btnContainer: {
    flex: 1,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
});

export default Landing;
