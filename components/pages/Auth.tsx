import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Input } from 'react-native-elements'
import styles from '../../styles/page_styles.styles';


export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    alert("A verification email has been sent to your email address. Please verify your email to login.");
    if (error) alert(error.message)
    setLoading(false)
  }
  

  return (
    <View style={styles.auth_profile_OuterContainer}>
      <View style={styles.auth_profile_InnerContainer}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
 
        <View style={styles.verticallySpaced}>
          <TouchableOpacity style={styles.proceedToNextPageBtn} onPress={() => signInWithEmail()}>
            <Text style={styles.proceedToCartBtnTxt} numberOfLines={1}>Sign in</Text>
         </TouchableOpacity>    
        </View>

        <View style={styles.verticallySpaced}>
          <TouchableOpacity style={styles.proceedToNextPageBtn} onPress={() => signUpWithEmail()}>
           <Text style={styles.proceedToCartBtnTxt} numberOfLines={1}>Sign up</Text>
         </TouchableOpacity>    
        </View>
     
      </View>
    </View>
  )
}
