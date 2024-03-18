import { View, Text, Button } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainNavigatorNavigationProp, MainNavigatorRouteProp, MainNavigatorStackParamList } from '../navigation/MainNavigator.types';
import StickyFooter from '../components/StickyFooter';
import { CounterContextProvider, useCounterContex } from '../components/CounterContex';

const Details = () => {
    
        const navigation = useNavigation<MainNavigatorNavigationProp>();
        
        const navigateToHome = () => {
            navigation.navigate("Home", {
                message: message,
            });
        };

        const {params} = useRoute<RouteProp<MainNavigatorStackParamList, "Details">>();
        const {message} = params ?? {};

                const MainComponent = () => {
                const {counter} = useCounterContex();
                      console.log("counter in details", {counter});
                return (
                  <>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Details</Text>
                    <Text style={{fontSize: 20}}>{message}</Text>
                    <Text style={{fontSize: 20}}>Number of applications: {counter}</Text>
                    <Button title="Home" onPress={navigateToHome} />
                    {/* <Button title="Push to Details" onPress={pushToDetails }/> */}
                  </View>
                    <StickyFooter />
                    </>
                );
              }

  return (
      <MainComponent />

  );
};

export default Details;