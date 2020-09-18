import React from 'react';
import {View, SafeAreaView, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flexGrow: 1}}>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
