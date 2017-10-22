import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { translate } from 'react-i18next';
import i18n from './i18n';
import MainTabNavigator from './MainTabNavigator';
import Landing from '../containers/Landing';
import CompleteLogin from '../containers/CompleteLogin';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    Landing: {
      screen: Landing,
    },
    CompleteLogin: {
      screen: CompleteLogin,
    },
  },
  {
    initialRouteName: 'Landing',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
);

const WrappedStack = () => {
  return <RootStackNavigator screenProps={{ t: i18n.getFixedT() }} />;
};

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedStack);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <ReloadAppOnLanguageChange />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification,
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
    );
  };
}
