import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Escolher() {
  const [imagemAtual, setImagemAtual] = useState(1);
  const navigation = useNavigation();

  const toggleImagem = () => {
    setImagemAtual(imagemAtual === 1 ? 2 : 1);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerte quem é mais bonita</Text>
      <View style={styles.imageContainer}>
      <Image
          source={imagemAtual === 1 ? require('../../assets/feia.jpg') : require('../../assets/cria2.jpeg')}
          style={styles.image}
        />
        <Image
          source={imagemAtual === 1 ? require('../../assets/linda.jpg') : require('../../assets/cria1.jpeg')}
          style={styles.image}
        />
       </View>
       <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Errouu')} style={styles.button}>
          <Text style={styles.buttonText}>Essa é mais bonita</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Acertouu')} style={styles.button}>
          <Text style={styles.buttonText}>Essa é mais bonita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});