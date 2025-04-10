import { Text, StyleSheet } from 'react-native'

const getClassificacao = (imc) => { //!Função para retornar a classificação do IMC
  const valor = parseFloat(imc)
  if (valor < 18.5) return 'Abaixo do peso'
  if (valor < 25) return 'Peso normal'
  if (valor < 30) return 'Sobrepeso'
  if (valor < 35) return 'Obesidade grau 1'
  if (valor < 40) return 'Obesidade grau 2'
  return 'Obesidade grau 3 (mórbida)'
}

const Classification = ({ imc }) => {
  return <Text style={styles.class}>{getClassificacao(imc)}</Text> //!Exibe a classificação
}

const styles = StyleSheet.create({
  class: {
    marginTop: 10,
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
  },
})

export default Classification
