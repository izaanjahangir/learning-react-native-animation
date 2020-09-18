import React from 'react';
import {Button as ButtonLib} from 'react-native-elements';

import style from './style';

function Button(props) {
  return (
    <ButtonLib
      onPress={props.onPress}
      containerStyle={[style.container, props.style]}
      title={props.children}
    />
  );
}

export default Button;
