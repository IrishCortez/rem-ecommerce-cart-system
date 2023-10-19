import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import styles from '../../styles/page_styles.styles';
import CartCard from '../frags/cards/CartCard';
import { supabase } from '../../lib/supabase';
import { COLORS, SIZES } from "../../contants";
import { useRouter } from "expo-router";

export const Cart = () => {
  const router = useRouter();
  const [total, setTotal] = useState(0.0);
  const [cart, setCart] = useState([]);
  const [sessionUserID, setSessionUserID] = useState('');

  useEffect(() => {
    getUserInSession();
  }, []);

  useEffect(() => {
    if (sessionUserID) {
      getCart();
      getTotal();
    }
  }, [sessionUserID]);

  async function getUserInSession() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setSessionUserID(user.id);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
  }

  async function getCart() {
    try {
      const { data, error } = await supabase
        .from('cart_tbl')
        .select(`id, prod_id, user_id, quantity, product_tbl(name, price)`)
        .eq('user_id', sessionUserID)
        .eq('isBought', 0);

      if (error) {
        throw error;
      }
      if (data) {
        setCart(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } 
  }

  async function getTotal() {
    try {
      const { data, error } = await supabase.rpc('cart_total', { us_id: sessionUserID });
      setTotal(data);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } 
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <View style={styles.cardsContainer}>
            {cart.map((cart) => (
              <CartCard cart={cart} key={cart.id} getTotal={getTotal} getCart={getCart} />
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.container}>
        <View style={styles.orderSummary}>
          <Text style={styles.orderSummaryTitle}>Order Summary</Text>
          <View style={styles.orderSummaryItem}>
            <Text>Subtotal:</Text>
            <Text>${total}</Text>
          </View>
          <View style={styles.orderSummaryItem}>
            <Text>Over $100 (10% OFF):</Text>
            <Text>${total > 100 ? (total * 0.1).toFixed(2) : '0.00'}</Text>
          </View>
          <View style={styles.orderSummaryTotal}>
            <Text>Total:</Text>
            <Text>${(total - (total > 100 ? total * 0.1 : 0)).toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.proceedToNextPageBtn} onPress={() => {
     router.push('/thanks');
    }}>
          <View style={styles.header}>
            <Text style={styles.proceedToNextPageBtnTxt}>Checkout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
