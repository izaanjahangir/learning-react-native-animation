import {StyleSheet} from 'react-native';

import constants from '../../config/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: constants.HORIZONTAL_SMALL,
  },
  text: {
    textAlign: 'center',
  },
});
