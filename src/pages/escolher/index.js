
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

export default function Escolher() {
  const [imagemAtual, setImagemAtual] = useState(1);

  const toggleImagem = () => {
    setImagemAtual(imagemAtual === 1 ? 2 : 1);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>É cria ou não é?</Text>
      <View style={styles.imageContainer}>
        {imagemAtual === 1 ? (
          <Image
            source={require('../../assets/cria1.jpeg')} 
            style={styles.image}
          />
        ) : (
          <Image
            source={require('../../assets/cria2.jpeg')} 
            style={styles.image}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleImagem} style={styles.button}>
          <Text style={styles.buttonText}>Esse é cria</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleImagem} style={styles.button}>
          <Text style={styles.buttonText}>Esse não é cria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    fontWeight: 'bold'
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
