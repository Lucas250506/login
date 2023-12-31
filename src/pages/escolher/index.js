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
      <Text style={styles.title}>Acerte quem é o mais cria</Text>
      <View style={styles.imageContainer}>
        <Image
          source={imagemAtual === 1 ? require('../../assets/cria1.jpeg') : require('../../assets/cria2.jpeg')}
          style={styles.image}
        />
        <Image
          source={imagemAtual === 1 ? require('../../assets/cria2.jpeg') : require('../../assets/cria1.jpeg')}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Errou')} style={styles.button}>
          <Text style={styles.buttonText}>Esse é o mais cria</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Acertou')} style={styles.button}>
          <Text style={styles.buttonText}>Esse é o mais cria</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
