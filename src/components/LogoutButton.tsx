// StickyFooter.tsx
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { MainNavigatorNavigationProp, MainNavigatorStackParamList } from '../navigation/MainNavigator.types';






const LogoutButton =() => {


    
    const navigation = useNavigation<MainNavigatorNavigationProp>();
    const navigateToLogin = () => {
         navigation.navigate("Login"
        );

    };

  

  return (

    


    <View >
      <Button onPress={navigateToLogin}><Text>Logout</Text> </Button>
    </View>
  );
};



export default LogoutButton;