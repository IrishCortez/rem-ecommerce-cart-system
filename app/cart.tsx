import React from 'react'
import { Cart } from '../components/pages/Cart'
import 'react-native-url-polyfill/auto'
import { View,SafeAreaView } from 'react-native'

import { Stack } from "expo-router";

import { COLORS } from "../contants";

const cart = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <Stack.Screen
        options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerTitle: "",
        }}
    />
      <View style={{flex: 1,}}>    
        <Cart/> 
      </View>
    </SafeAreaView>
  )
}

export default cart