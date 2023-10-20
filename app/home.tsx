import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import Auth from '../components/pages/Auth'
import { View,SafeAreaView } from 'react-native'
import { Session } from '@supabase/supabase-js'
import { Product } from '../components/pages/Product'

import { Stack } from "expo-router";

import { COLORS } from "../contants";


export default function Home() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

  }, [])

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
      {session && session.user ? <Product session={session} /> : <Auth />}
    </View>
    </SafeAreaView>
  )
}