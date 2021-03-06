import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import moment from 'moment';
import Screen from '../components/lib/Screen';
import { translate, Trans } from 'react-i18next';
import Text from '../components/lib/Text';
import TextInput from '../components/lib/TextInput';
import Datepicker from '../components/lib/Datepicker';
import Button from '../components/lib/Button';
import { getAuth, setAuth } from '../navigation/utils';
import { screenTabStyles } from '../styles/navigatorStyles';

class CompleteLogin extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      headerTitle: (
        <Text size="xl" weight="bold">
          {navigation.state.params.role === 'mentor'
            ? screenProps.t('completeLogin:mentor')
            : screenProps.t('completeLogin:mentee')}
        </Text>
      ),
      headerStyle: screenTabStyles,
    };
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
    language: '',
    role: '',
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
      role: account.role,
    }));
  }

  finishLogin = async () => {
    const {
      fbId,
      bio,
      country,
      interest,
      language,
      firstName,
      lastName,
      username,
      email,
      gender,
      dob,
      role,
      picture,
    } = this.state;
    const { login, navigation } = this.props;
    //
    try {
      let res = await fetch('https://33a690dc.ngrok.io/user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          facebook_id: fbId,
          bio,
          country_of_origin: country,
          language,
          first_name: firstName,
          last_name: lastName,
          interest: interest,
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
        <View style={{ alignItems: 'center', padding: 10, width: '100%' }}>
          <Text size="lg" weight="medium" color="#000">
            We Need Some Info
          </Text>
        </View>
        <TextInput
          onChange={bio => this.setState(() => ({ bio }))}
          value={this.state.bio}
          placeholder="Give us a small bio"
        />
        <TextInput
          onChange={country => this.setState(() => ({ country }))}
          value={this.state.country}
          placeholder="Country of Origin"
        />
        <TextInput
          onChange={interest => this.setState(() => ({ interest }))}
          value={this.state.interest}
          placeholder="Interest"
          autoCapitalize="none"
        />
        <TextInput
          onChange={language => this.setState(() => ({ language }))}
          value={this.state.language}
          placeholder="Language"
          autoCapitalize="none"
        />
        <View
              style={{
                width: '100%',
                alignItems: 'center',
                margin: 30,
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 10,
                
              }}
            >
              <Button
                style={
                  this.state.language === 'en' ? styles.btnActive : styles.btn
                }
                onPress={() => this.setState(() => ({ language: 'en' }))}
              >
                <Text color={'#fff'}>En</Text>
              </Button>
              <Button
                style={this.state.language === 'es' ? styles.btnActive : null}
                onPress={() => this.setState(() => ({ language: 'es' }))}
              >
                <Text color={'#fff'}>Es</Text>
              </Button>
            </View>
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
    margin: 10,
    shadowColor: '#C6C6C6',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 5,
    shadowRadius: 10,
  },
  btnActive: {
    margin: 10,
    padding: 10,
    height: 35,
    shadowColor: '#C6C6C6',
    shadowOpacity: 2,
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

export default translate(['completeLogin', 'common'], { wait: true })(
  CompleteLogin,
);
