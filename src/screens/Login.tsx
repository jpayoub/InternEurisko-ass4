import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { MainNavigatorNavigationProp } from '../navigation/MainNavigator.types';

interface LoginProps {
  // Add any props that you want to pass to the Login component here
}

interface LoginState {
  username: string;
  password: string;
}

const Login = () => {

    const navigation = useNavigation<MainNavigatorNavigationProp>();
    const navigateToHome = () => {
         navigation.navigate("Home", {
            message: state.username,
        });
    };

  const [state, setState] = useState<LoginState>({
    username: '',
    password: '',
  });

  const handleUsernameChange = (text: string) => {
    setState({ ...state, username: text });
  };

  const handlePasswordChange = (text: string) => {
    setState({ ...state, password: text });
  };

  const displayAlert = () => {
    Alert.alert(
      'WELCOME HOME',
      'You are now logged in!',
      [
        {
          text: 'CLOSE',
        },
      ],
    );
  };

  const navigateAndDisplay = () => {
    
    displayAlert();
    navigateToHome();
  }


  return (
    <View style={{flex:1, justifyContent: 'center', paddingLeft: 15, paddingRight:15}}>
      <TextInput style={{borderBottomWidth: 1, borderColor: 'gray', padding: 20}}
        placeholder="Username"
        value={state.username}
        onChangeText={handleUsernameChange}
      />
      <TextInput style={{borderBottomWidth: 1, borderColor: 'gray', padding: 20}}
        placeholder="Password"
        value={state.password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <View style={{ paddingTop: 20 }}>
        <Button title="Login" onPress={navigateAndDisplay} />
      </View>   
    </View>
  );
};

export default Login;