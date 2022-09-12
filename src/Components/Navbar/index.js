import React from "react";
import { Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Navbar({ name }) {
  return (
    <View
      style={{
        position: 'absolute',
        top: 30,
        left: 20,
        width: '100%'
      }}
    >
      <View
        style={{
          position: 'relative',
          alignItems: 'center',
          alignContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 25,
              borderRadius: 90,
              marginRight: 20,
              width: 25,
              height: 25
            }}
          />
          <View>
            <Text style={{
              position: 'relative',
              fontFamily: 'Maven',
              color: 'white',
              fontSize: 22
            }}>
              {`Olá ${name}`}
            </Text>
            <Text style={{
              position: 'relative',
              fontFamily: 'Maven',
              color: 'white',
              fontSize: 16
            }}>
              {`Bem vindo`}
            </Text>
          </View>
        </View>
        
        <View
          style={{ 
            position: 'absolute',
            right: 50
          }}
        >
          <MaterialCommunityIcons 
            name="qrcode-scan" 
            size={35} 
            color="white" 
          />
        </View>
      </View>

    </View>
  )
}