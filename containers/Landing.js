import React, { Component } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import Screen from '../components/lib/Screen';
import Text from '../components/lib/Text';
import Button from '../components/lib/Button';
import { logIn, getAuth, setAuth } from '../navigation/utils';

class Landing extends Component {
  static navigationOptions = {
    headerStyle: { display: 'none' },
  };

  state = {
    role: null,
  };

  async componentDidMount() {
    let authed = await getAuth();

    if (authed.language && authed.language !== '') {
      this.props.navigation.navigate('Home');
    }
  }

  doLogin = async () => {
    try {
      if (this.state.role === null) {
        Alert.alert(
          'Select a role',
          "You didn't select your mentor/mentee role.",
        );
        return;
      }

      const { getUser } = this.props;
      let isLoggedIn = await logIn();
      let account = await getAuth();

      setAuth({ ...account, role: this.state.role });

      // let res = await fetch(`\https://mywebsite.com/user/${account.fbId}`);

      // if (res.status === 200) {
      this.props.navigation.navigate('Home');
      // } else {
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
          <View
            style={{
              width: 252,
              justifyContent: 'center',
            }}
          >
            <View>
              <Text size="lg">Help or be helped?</Text>
              <Text size="md">Mentor or Mentee?</Text>
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 10,
              }}
            >
              <Button
                style={
                  this.state.role === 'mentor' ? styles.btnActive : styles.btn
                }
                onPress={() => this.setState(() => ({ role: 'mentor' }))}
              >
                <Text color={this.state.role === 'mentor' ? '#fff' : '#000'}>
                  I'm here to help
                </Text>
              </Button>
              <Button
                style={this.state.role === 'mentee' ? styles.btnActive : null}
                onPress={() => this.setState(() => ({ role: 'mentee' }))}
              >
                <Text color={this.state.role === 'mentee' ? '#fff' : '#000'}>
                  I'm here to help
                </Text>
              </Button>
            </View>
          </View>
          <Button
            size="lg"
            onPress={this.doLogin}
            style={{ width: 252, marginTop: 10 }}
          >
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
  btnActive: {
    marginRight: 10,
    backgroundColor: '#000',
  },
  btn: {
    marginRight: 10,
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
    alignItems: 'center',
  },
});

export default Landing;
