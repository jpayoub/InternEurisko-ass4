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
                  <View style={{flex: 1, justifyContent: 'Top', alignItems: 'center', paddingTop: 20}}>
                    <Text>Here you can see number of times you applied for Jobs</Text>
                    {/* <Button title="Home" onPress={navigateToHome} /> */}
                    {/* <Button title="Push to Details" onPress={pushToDetails }/> */}
                  </View>
                  <View style={{flex: 1, justifyContent: 'top', padding: 15}} >                     
                    <Text style={{fontSize: 20}}>{message}, you applied {counter} times to jobs listed on our app!</Text>
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