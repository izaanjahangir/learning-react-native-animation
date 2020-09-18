import React from 'react';
import {View, Text} from 'react-native';

import style from './style';

function Home() {
  return (
    <View style={style.container}>
      <Text style={style.Text}>Welcome to home screen</Text>
    </View>
  );
}

export default Home;
