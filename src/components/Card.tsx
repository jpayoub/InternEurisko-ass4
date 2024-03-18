import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useCounterContex } from './CounterContex';

const Card = () => {

   
     
  const ButtonCounter = () => {
    const {setCounter} = useCounterContex();
    const updateState = () => {
    
        setCounter(prev => prev + 1);
        Alert.alert(
            'Congratulations!!',
            'You applied for this job. Now please wait patiently for our response',
            [{ text: 'CLOSE' }]
          );
    };


    return (
      <Button title="Apply For Job" onPress={updateState} />
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Senior Software Engineer</Text>
      <Text style={styles.description}>5+ experience in React Native, ReactJS, NodeJS and Supabase</Text>
      <ButtonCounter />
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Card;
