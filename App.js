import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from
    'react-native';
export default function ConversorTemperatura() {
  const [temperatura, setTemperatura] = useState("");
  const [res, setResultado] = useState("");
  const [op, setOpcao] = useState("1");

  const convTemperatura = () => {
    let valor = parseFloat(temperatura);
    if (isNaN(valor)) {
      setRes("Insira um número válido.");
      return;
    }
    
    if (opcao === "1") {
      setRes(`${valor}°F equivale a ${((valor - 32) / 1.8).toFixed(2)}°C`);
    } else {
      setRes(`${valor}°C equivale a ${((valor * 1.8) + 32).toFixed(2)}°F`);
    }
  };

  return (
    <View style={styles.container}>
            <Image source={{ uri: 'https://placehold.co/150' }}
                style={styles.image} />
    <Text style={styles.title}>Conversor de Temperatura</Text>
      <select className="mb-2 p-2 border rounded" value={opcao} onChange={(e) => setOpcao(e.target.value)}>
        <option value="1">Fahrenheit para Celsius</option>
        <option value="2">Celsius para Fahrenheit</option>
      </select>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite a temperatura"
        value={temperatura}
        onChange={(e) => setTemperatura(e.target.value)}
      />
      <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={convTemperatura}>
                    <Text style={styles.buttonText}>Converter Temperatura</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.result}>{resultado}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        width: '80%',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    result: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});