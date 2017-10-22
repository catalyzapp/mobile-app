import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import Messages from '../containers/Messages';
import Settings from '../containers/Settings';

let HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default TabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Messages: {
      screen: Messages,
    },
    Settings: {
      screen: Settings,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Messages':
            iconName =
              Platform.OS === 'ios'
                ? `ios-chatboxes${focused ? '' : '-outline'}`
                : 'md-chatboxes';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios'
                ? `ios-options${focused ? '' : '-outline'}`
                : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? 'black' : 'grey'}
          />
        );
      },
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
      },
      tabStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);
