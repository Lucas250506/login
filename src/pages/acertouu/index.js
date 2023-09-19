import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import * as Animatable from 'react-native-animatable'

export default function Acertou() {
    const navigation = useNavigation();
    return (<View style={styles.container}>
    <Text style={styles.title}>ACERTOUUUU</Text>
    <Animatable.Image 
          animation='flipInY'
          source={require('../../assets/acertou.jpg')}
          style= {{ width: '100%' }}
          resizeMode='contain'
        />
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',},

        title: {
            fontSize: 30,
            fontWeight: 'bold',
          },
        
})