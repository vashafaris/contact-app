import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
