import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import InformationScreen from './Information';
import {Text} from 'react-native';

export default () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: '#65a721',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="Information"
        component={InformationScreen}
        options={{
          tabBarIcon: () => <Text>ℹ</Text>,
        }}
      />
    </Tab.Navigator>
  );
};
