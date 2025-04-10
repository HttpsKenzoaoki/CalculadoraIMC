import React from 'react'
import { StyleSheet, View } from 'react-native'
import Title from './src/components/Title' //!importando componente do titulo
import FormIMC from './src/components/FormIMC' //!Importando componente do formulario

export default function App() {
  return (
    <View style={styles.container}>
      <Title /> //!Componente que mostra o titulo do projeto
      <FormIMC /> //!Componente que mostra o formulario, resultados
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
})
