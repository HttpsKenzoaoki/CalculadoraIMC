import { Text, StyleSheet } from 'react-native'

const IdealWeight = ({ altura }) => { 
  const alturaM = parseFloat(altura) / 100 //!Converte altura de cm para metros

  const min = (18.5 * alturaM * alturaM).toFixed(1) //!Faz o calculo e define o valor minimo para uma variavel
  const max = (24.9 * alturaM * alturaM).toFixed(1) //!Faz o calculo e define o valor maximo para uma variavel

  return ( //! Mostra o peso ideal para uma certa altura, apos calculo
    <Text style={styles.ideal}>
      Peso ideal entre {min} kg e {max} kg 
    </Text>
  )
}

const styles = StyleSheet.create({
  ideal: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: 'purple',
  },
})

export default IdealWeight
