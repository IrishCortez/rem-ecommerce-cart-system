import React from 'react'
import { TouchableOpacity,Image,View, Text } from 'react-native';
import styles from '../../../styles/card_style.style'
import { supabase } from '../../../lib/supabase'
import { useState, useEffect } from 'react'

import { Alert } from 'react-native'



const ProductCard = (props: { product: any;  }) => {
  const product = props.product;
  const [sessionUserID, setSessionUserID] = useState('');

  async function getUserInSession() {
    const { data: { user } } = await supabase.auth.getUser()
    setSessionUserID(user.id);
  }
  
  useEffect(() => {
    getUserInSession();
  }, []);

  async function addToCart() {
    try {
      await getUserInSession();

      const exists = await checkIfExist(); 
      if(exists){
        const { data } = await supabase
        .from('cart_tbl')
        .select('quantity')
        .eq('user_id', sessionUserID)
        .eq('prod_id', product.prod_id)
        .eq('isBought', 0)

        const { error } = await supabase
        .from('cart_tbl')
        .update({ quantity: data[0].quantity+1 })
        .eq('prod_id', product.prod_id)
        .eq('user_id', sessionUserID)
        .eq('isBought', 0)

        alert(product.name +" added. Quantity updated!");

        
      }else{
        const { error } = await supabase
        .from('cart_tbl')
        .insert({ prod_id: product.prod_id, user_id: sessionUserID, quantity: 1, isBought: 0 })
        if (error ) throw error;
        alert(product.name +" added!");

      }

      } catch (error) {
        alert(error.message);
    }
}


  
  async function checkIfExist() {
    try {
        const {count ,error } = await supabase
        .from('cart_tbl')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', sessionUserID)
        .eq('prod_id', product.prod_id)
        .eq('isBought', 0)
        .single()

        if (count !== null){
         return true;
        }else{
          return false;
        }
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message)
        }
      } finally {
       
      }
    }



    return (
      <View style= {styles.container}>
        <View>
          <Text style={styles.prodName} numberOfLines={1}>{product.name}</Text>
          <Text style={styles.prodPice}>${product.price}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartBtn} onPress={() => addToCart()}>
           <Text style={styles.btnText} numberOfLines={1}>Add to cart</Text>
         </TouchableOpacity>        
      </View>

    );
  };

export default ProductCard



