import React from 'react'
import {Text, View, TouchableOpacity, SafeAreaView,ScrollView, Alert} from 'react-native'
import ProductCard from '../frags/cards/ProductCard'
import styles from '../../styles/page_styles.styles';
import { COLORS,SIZES } from "../../contants";


import { Session } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'
import { useState, useEffect } from 'react'


import { useRouter } from "expo-router";

export const Product = ({ session }: { session: Session }) => {
  const router = useRouter();
  
  const [products, setProducts] = useState<{
    name: string;
    description: string;
    price: number;
    prod_id: string;
  }[]>([]);
  

  useEffect(() => {
    if (session) getProducts()
  }, [session])

  async function getProducts() {
    try {
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error } = await supabase
      .from('product_tbl')
      .select(`name, description, price,prod_id`)

      if (error) throw error;
      if (data) setProducts(data);
    } 
    catch (error) {
      if (error instanceof Error) Alert.alert(error.message);
      } 
  }






  return (

<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      
          <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Products Lists</Text>
          </View>
          </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1,padding: SIZES.medium, }}>
        

          <View style={styles.cardsContainer}>
            {products.map((product) => (
            <ProductCard product={product} key={product.prod_id} />
            ))
            }
          </View>

          
        </View>
      </ScrollView>
    <View style={styles.container}>
      <TouchableOpacity style={styles.proceedToNextPageBtn}  onPress={() => {
     router.push('/cart');
    }}>
          <View>
            <Text style={styles.proceedToCartBtnTxt}>Proceed to Cart</Text>
          </View>

      </TouchableOpacity>

      </View>
     </SafeAreaView>

  )
}
