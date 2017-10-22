import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import moment from 'moment';
import Screen from '../components/lib/Screen';
import Text from '../components/lib/Text';
import TextInput from '../components/lib/TextInput';
import Datepicker from '../components/lib/Datepicker';
import Button from '../components/lib/Button';
import { getAuth, setAuth } from '../navigation/utils';
import { screenTabStyles } from '../styles/navigatorStyles';

class CompleteLogin extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text size="xl" weight="bold">
        Finish Login
      </Text>
    ),
    headerStyle: screenTabStyles,
  };

  state = {
    fbid: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    picture: '',
    bio: '',
    country: '',
    education: '',
    language: '',
  };

  async componentDidMount() {
    let account = await getAuth();

    this.setState(() => ({
      fbId: account.fbId,
      firstName: account.firstName,
      lastName: account.lastName,
      email: account.email,
      gender: account.gender,
      picture: account.picture,
    }));
  }

  onDateChange = dob =>
    this.setState(() => ({
      dob: moment(dob, 'MMMM DD, YYYY').format('MMMM DD, YYYY'),
    }));

  finishLogin = async () => {
    const {
      fbId,
      bio,
      country,
      education,
      language,
      firstName,
      lastName,
      username,
      email,
      gender,
      dob,
      picture,
    } = this.state;
    const { login, navigation } = this.props;
    //
    try {
      let res = await fetch('https://mywebsite.com/user/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          facebook_id: fbId,
          bio,
          country_of_origin: country,
          education,
          language,
          first_name: firstName,
          last_name: lastName,
          email,
          gender,
          dob,
          image_link: picture,
          role,
        }),
      });

      console.log(res);

      if (res.status == 200) {
        setAuth(this.state);
        navigation.navigate('Home');
      } else {
        throw '400 Response';
      }
    } catch (e) {
      console.log(e);
      Alert.alert('Failed to finish login', 'Something went wrong');
    } finally {
      // do loading
    }
  };

  render() {
    return (
      <Screen
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <TextInput
          onChange={firstName => this.setState(() => ({ firstName }))}
          value={this.state.firstName}
          placeholder="First Name"
        />
        <TextInput
          onChange={lastName => this.setState(() => ({ lastName }))}
          value={this.state.lastName}
          placeholder="Last Name"
        />
        <TextInput
          onChange={email => this.setState(() => ({ email }))}
          value={this.state.email}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          onChange={username => this.setState(() => ({ username }))}
          value={this.state.username}
          placeholder="Username"
          autoCapitalize="none"
        />
        <Datepicker date={this.state.dob} onDateChange={this.onDateChange} />
        <View style={styles.genderGroup}>
          <Button
            onPress={() => this.setState(() => ({ gender: 'male' }))}
            style={this.state.gender === 'male' ? styles.btnActive : styles.btn}
            txtColor={this.state.gender === 'male' ? '#fff' : '#000'}
            size="sm"
          >
            Male
          </Button>
          <Button
            onPress={() => this.setState(() => ({ gender: 'female' }))}
            style={
              this.state.gender === 'female' ? styles.btnActive : styles.btn
            }
            txtColor={this.state.gender === 'female' ? '#fff' : '#000'}
            size="sm"
          >
            Female
          </Button>
          <Button
            onPress={() => this.setState(() => ({ gender: 'other' }))}
            style={
              this.state.gender === 'other' ? styles.btnActive : styles.btn
            }
            txtColor={this.state.gender === 'other' ? '#fff' : '#000'}
            size="sm"
          >
            Other
          </Button>
        </View>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={{
            uri: this.state.picture
              ? this.state.picture
              : 'http://nemanjakovacevic.net/wp-content/uploads/2013/07/placeholder.png',
          }}
        />
        <View style={styles.finishContainer}>
          <Button onPress={this.finishLogin} size="xl">
            Finish
          </Button>
        </View>
      </Screen>
    );
  }
}

let styles = StyleSheet.create({
  btn: {
    height: 35,
  },
  btnActive: {
    height: 35,
    backgroundColor: '#000',
  },
  genderGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  finishContainer: {
    flex: 1,
    paddingBottom: 10,
    justifyContent: 'flex-end',
  },
});

export default CompleteLogin;
