import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator'
import { CounterContextProvider,useCounterContex } from "./src/components/CounterContex";

const App = () => {
  return (
    <CounterContextProvider>
    <NavigationContainer>
      
      <MainNavigator />
        </NavigationContainer>
    </CounterContextProvider>    
  );
};

export default App;