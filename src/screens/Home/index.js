import React from 'react';
import {View} from 'react-native';

import Button from '../../components/Button';
import style from './style';

function Home(props) {
  function navigate(route) {
    props.navigation.navigate(route);
  }

  return (
    <View style={style.container}>
      <Button onPress={() => navigate('SimpleTextAnimation')}>
        Simple Text Animation
      </Button>
    </View>
  );
}

export default Home;
