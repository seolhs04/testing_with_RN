import React from 'react';
import {StyleSheet, View} from 'react-native';
import Profile from './Profile';

const App = () => {
  return (
    <View style={styles.container}>
      <Profile userName={'shs00421'} name={'설희석'} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
