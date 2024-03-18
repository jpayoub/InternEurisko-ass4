import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MainNavigatorNavigationProp, MainNavigatorStackParamList } from '../navigation/MainNavigator.types';






const StickyFooter =() => {

    const {params} = useRoute<RouteProp<MainNavigatorStackParamList, "Details">>();
    const {message} = params ?? {};

    
    const navigation = useNavigation<MainNavigatorNavigationProp>();
    const navigateToDetails = () => {
         navigation.navigate("Details", {
            message: message,
        });

    };

    const navigateToHome = () => {
        navigation.navigate("Home", {
           message: message,
       });

   };

  return (

    


    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.button} onPress={navigateToHome}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToDetails}>
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default StickyFooter;