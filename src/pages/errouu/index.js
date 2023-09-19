import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import * as Animatable from 'react-native-animatable'

export default function Errou() {
     const navigation = useNavigation();
    return (<View style={styles.container}>
    <Text style={styles.title}>ERROUUUU</Text>
    <Animatable.Image 
          animation='flipInY'
          source={require('../../assets/errou.jpg')}
          style= {{ width: '100%' }}
          resizeMode='contain'
        />
    </View>)

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',},

        title: {
            fontSize: 30,
            fontWeight: 'bold',
          },
       
})