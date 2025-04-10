import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native'
import Result from './Result'
import Classification from './Classification'
import IdealWeight from './IdealWeight'

const FormIMC = () => { //!Estados para os inputs
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState(null)
  const [imc, setImc] = useState(null)

  const calcularIMC = () => { //!função para calcular o IMC e validar entradas
    const p = parseFloat(peso)
    const a = parseFloat(altura)
    const i = parseInt(idade)
    if (!p || !a || !i || p <= 0 || a <= 0 || i <= 0 || !sexo) {
      Alert.alert('Erro', 'Preencha todos os campos corretamente.')
      return
    }
    const alturaMetros = a / 100
    const imcCalculado = (p / (alturaMetros * alturaMetros)).toFixed(2)
    setImc(imcCalculado)
  }

  return (
    <View style={styles.formContainer}>
      //!Campo da idade
      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />
      //!Campo para peso
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      //!Campo para altura
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      //!Botões para selecionar o sexo
      <View style={styles.sexoContainer}>
        <TouchableOpacity
          style={[styles.sexoBotao, sexo === 'M' && styles.sexoSelecionado]}
          onPress={() => setSexo('M')}
        >
          <Text style={styles.sexoTexto}>♂ Masculino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sexoBotao, sexo === 'F' && styles.sexoSelecionado]}
          onPress={() => setSexo('F')}
        >
          <Text style={styles.sexoTexto}>♀ Feminino</Text>
        </TouchableOpacity>
      </View>
      //!Botão para calcular IMC
      <TouchableOpacity style={styles.customButton} onPress={calcularIMC} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity> 
      //!Exibe resultado e classificação se tiver IMC calculado
      {imc && (
        <>
          <Result imc={imc} />
          <Classification imc={imc} />
          <IdealWeight altura={altura} />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  sexoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sexoBotao: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  sexoSelecionado: {
    backgroundColor: 'purple',
  },
  sexoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  customButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
})

export default FormIMC
