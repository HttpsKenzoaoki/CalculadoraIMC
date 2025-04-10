import { Text, StyleSheet } from 'react-native'

const Result = ({ imc }) => {
  return <Text style={styles.result}>Seu IMC é: {imc}</Text> //!Exibe o valor do IMC
}

const styles = StyleSheet.create({
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
  },
})

export default Result
