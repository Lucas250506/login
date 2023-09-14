import React from 'react'
import {
    View,
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity
   } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Escolher(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Teste</Text>
           <View style={styles.container2}>

           </View>
           <View style={styles.container3}>
            <TouchableOpacity>
                <Text style={styles.text}> CLICAVEL</Text>
            </TouchableOpacity>
           </View>
           <View style={styles.container4}>

           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'red'
    },
    text: {
        fontSize:28,
        fontWeight: 'bold',
        color: '#fff'
    },
    container2: {
        flex:1,
        backgroundColor:'blue'
    },
    container3: {
        flex:2,
        backgroundColor:'green'
    },
    container4: {
        flex: 2,
        backgroundColor:'yellow'
    }
})