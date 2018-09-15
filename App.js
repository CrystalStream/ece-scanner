import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeContainer, AuthContainer } from './containers'

const App = createStackNavigator({
  Auth: { screen: AuthContainer },
  Home: { screen: HomeContainer }
});

export default App;