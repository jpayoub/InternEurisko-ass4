import { View, Text, Button, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainNavigatorNavigationProp, MainNavigatorStackParamList } from '../navigation/MainNavigator.types';
import StickyFooter from '../components/StickyFooter';
import { CounterContextProvider, useCounterContex } from '../components/CounterContex';
import Card from '../components/Card';

const Home = () => {


    const navigation = useNavigation<MainNavigatorNavigationProp>();
    const navigateToDetails = () => {
         navigation.navigate("Details", {
            message: message,
        });
    };

    const {params} = useRoute<RouteProp<MainNavigatorStackParamList, "Home">>();
    const {message} = params ?? {};

  const MainComponent = () => {
   return (
    <>
    
    <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center' }}>
      
      <Text style={{fontSize:20, paddingTop: 10, color: '#000000'}}>Welcome Home {message}</Text>
      
      <Text style={{padding: 15, fontSize: 15}}>Open Positions</Text>
      <Card />
    </View>
    
    <StickyFooter />
    </>
    );
  };

  return (
      <MainComponent />

  );
};

export default Home;