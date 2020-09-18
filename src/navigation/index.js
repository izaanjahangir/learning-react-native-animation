import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import SimpleTextAnimation from '../screens/SimpleTextAnimation';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="SimpleTextAnimation"
        component={SimpleTextAnimation}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
