import React, { useState,useEffect } from 'react'
import { TouchableOpacity,TextInput,View, Text, Alert } from 'react-native';
import styles from '../../../styles/card_style.style'
import { supabase } from '../../../lib/supabase'

const CartCard = (props: { cart: any;  getTotal: () => void; getCart: () => void }) => {
  const product = props.cart;
  const [sessionUserID, setSessionUserID] = useState('');

  const checkDiscount= () => {
    props.getTotal();
  };

  useEffect(() => {
    getUserInSession()
    }, [])

  async function getUserInSession() {
    const { data: { user } } = await supabase.auth.getUser()
    setSessionUserID(user.id);
  }

  
  async function removeProduct() {
    try {
      const { error } = await supabase
      .from('cart_tbl')
      .delete()
      .eq('user_id', sessionUserID)
      .eq('prod_id', product.prod_id)
      .eq('isBought', 0)

      if (error) {
        if (error instanceof Error) Alert.alert(error.message);
      } else {
        // If the deletion was successful, now fetch the updated cart data
        await props.getCart();
        checkDiscount();

      }
    } 
    catch (error) {
      if (error instanceof Error) Alert.alert(error.message);
      }     
  }


  async function updateQty(cartQty) {
    try {
      const { error } = await supabase
      .from('cart_tbl')
      .update({ quantity: cartQty })
      .eq('id', product.id)
      .eq('prod_id', product.prod_id)
      .eq('isBought', 0)
      checkDiscount();
      
    } 
    catch (error) {
      if (error instanceof Error) Alert.alert(error.message);
      } 
  }


  async function incrementQty() {
    try {
      const newQty = product.quantity + 1;
      await updateQty(newQty);
      product.quantity = newQty;

    } catch (error) {
      if (error instanceof Error) Alert.alert(error.message);
    }
  }
  
  async function decrementQty() {
    try {
      const newQty = product.quantity - 1;
      await updateQty(newQty);
      product.quantity = newQty;

    } catch (error) {
      if (error instanceof Error) Alert.alert(error.message);
    }
  }
  
  

    return (
      <View style= {styles.container}>
        <View>
          <Text style={styles.prodName} numberOfLines={1}>{product.product_tbl.name}</Text>
          <Text style={styles.prodPice}>${product.product_tbl.price}</Text>
        </View>
        <TouchableOpacity style={styles.changeQtyBtn} onPress={decrementQty}>
    <Text style={styles.btnText}>-</Text>
  </TouchableOpacity>
            <TextInput 
            style={styles.qtyTxtbox}
            keyboardType="numeric" 
            value={product.quantity}
            onChangeText={(text) => updateQty(text)}
            />
        <TouchableOpacity style={styles.changeQtyBtn} onPress={incrementQty}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.removeFromCartBtn} onPress={removeProduct}>
           <Text style={styles.btnText} numberOfLines={1}>Remove</Text>
         </TouchableOpacity>        
      </View>

    );
  };

export default CartCard



