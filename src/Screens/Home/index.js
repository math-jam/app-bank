import React from "react";
import { View, Text } from 'react-native';
import Navbar from "../../Components/Navbar";


export default function HomeScreen() {
  return (
    <>
      <View style={{ 
        backgroundColor: 'black', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
      }}>
        <Navbar name="Matheus" />
        <Text style={{ color: 'white' }}>Home Screen</Text>
      </View>
    </>
  );
}