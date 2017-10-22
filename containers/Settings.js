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

class Settings extends Component {
  static navigationOptions = ({ navigate }) => {
    return {
      headerTitle: 'Settings',
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
    education: '',
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
        onChange={education => this.setState(() => ({ education }))}
        value={this.state.education}
        placeholder="Interests"
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
        <Button onPress={this.finishLogin} size="xl" txtColor={'white'} >
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


export default Settings;
