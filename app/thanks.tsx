import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity,Alert } from 'react-native';
import { COLORS } from '../contants';
import styles from '../styles/page_styles.styles';
import { useRouter,Stack } from "expo-router";
import { supabase } from '../lib/supabase';
import { useEffect } from 'react'


const thanks = () => {
    const router = useRouter();

    useEffect(() => {
        completeTransaction();
      }, []); 


    async function completeTransaction() {
        try {
        const { data: { user } } = await supabase.auth.getUser();
        const { error } = await supabase
            .from('cart_tbl')
            .update({ isBought: 1 })
            .eq('user_id', user.id)
            // If we are planning on scaling the system, adding new tables such as orders_tbl and/or cart2_tbl where
            // we could relate our cart_tbl is preferred. But for this exercise, updating all isBought to 1 of the
            // current user is enough.

          if (error) {
            throw error;
          }
          
        } catch (error) {
          if (error instanceof Error) {
            Alert.alert(error.message);
          }
        } 
      }




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerTitle: "",
                }}
            />

            <View style={styles.thanksContainer}>
                <Text style={styles.thankYouText}>Thank You for Your Order!</Text>
                <Text style={styles.orderDetailsText}>Your order is confirmed.</Text>
                <TouchableOpacity style={styles.backToShopButton} onPress={() => {
                router.push('/home');
                }}>
                <Text style={styles.backToShopText}>Back to Shop</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    
  )
}

export default thanks
