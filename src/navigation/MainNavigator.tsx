import { View,Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import { MainNavigatorStackParamList } from "./MainNavigator.types";
import Login from "../screens/Login";
import LogoutButton from "../components/LogoutButton";

const MainStackNavigator = 
createNativeStackNavigator<MainNavigatorStackParamList>();

const MainNavigator = () => {
    return <MainStackNavigator.Navigator initialRouteName="Login" screenOptions={{
        


        headerTitleStyle: {
            color: 'blue',
            fontSize: 30,
        },
        headerTitleAlign: 'center',
        headerBackVisible: false,
       
    }}  >

        <MainStackNavigator.Screen
        name="Login"
        component={Login}
        
        />

        <MainStackNavigator.Screen 
        name="Home" 
        component={Home}

        options={{
            headerRight: () => (
              <LogoutButton />
            ),
          }}

        />
        <MainStackNavigator.Screen 
        name="Details" 
        component={Details} 

        options={{
            headerRight: () => (
              <LogoutButton />
            ),
          }}
        />


    </MainStackNavigator.Navigator>;
}

export default MainNavigator;



