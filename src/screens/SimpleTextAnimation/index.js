import React, {useState} from 'react';
import {View, Animated} from 'react-native';

import Button from '../../components/Button';
import style from './style';

function SimpleTextAnimation() {
  const [y] = useState(new Animated.Value(0));

  function startAnimation() {
    Animated.timing(y, {
      toValue: -200,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={style.container}>
      <Animated.Text style={[style.text, {transform: [{translateY: y}]}]}>
        Welcome to home screen
      </Animated.Text>
      <Button style={{marginTop: 10}} onPress={startAnimation}>
        Animate
      </Button>
    </View>
  );
}

export default SimpleTextAnimation;
