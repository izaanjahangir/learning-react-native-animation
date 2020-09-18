import React from 'react';
import {View, SafeAreaView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
