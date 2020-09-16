import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import TextComponent from '../Text';

const Waiting = () => {
  return (
    <View data-test="component-waiting" style={styles.container}>
      <ActivityIndicator
        size="large"
        color={'black'}
        style={{marginBottom: 12}}
      />
      <TextComponent>Please wait just a moment</TextComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
});

export default Waiting;
