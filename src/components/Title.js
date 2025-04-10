import { Text, StyleSheet } from 'react-native'

const Title = () => {
  return <Text style={styles.title}>Calculadora de IMC</Text> //! Mostra o titulo do aplicativo
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'red',
  },
})

export default Title
