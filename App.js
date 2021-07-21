/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import LoginView from './src/screens/Login';
import FisheriesView from './src/screens/Species';
import Detail from './src/screens/Detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Spices" component={FisheriesView} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ route }) => ({ title: route.params.SpeciesName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
