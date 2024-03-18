import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { MainNavigatorNavigationProp, MainNavigatorStackParamList } from '../navigation/MainNavigator.types';
import { useCounterContex } from './CounterContex';






const LogoutButton =() => {


    const navigation = useNavigation<MainNavigatorNavigationProp>();
    const navigateToLogin = () => {
         navigation.navigate("Login"
        );

    };


  
        const {setCounter} = useCounterContex();
        const updateState = () => {
        
            setCounter(0);
            
        };
    
    const functions2 = () => {
        updateState();
        navigateToLogin();
    }
   


  return (

    


    <View >
      <Button title="Logout" onPress={functions2} />
    </View>
  );
};



export default LogoutButton;