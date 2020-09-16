import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';

import Navigation from './src/navigation';
import configureStore from './src/store';

const Root = () => {
  const store = configureStore();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default Root;
