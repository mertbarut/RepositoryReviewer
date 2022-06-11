import { View, Text, StyleSheet } from 'react-native'

export interface DetailedStatProps {
  header: string,
  stat: number
}

const DetailedStat = ( {header, stat} : DetailedStatProps ) => {
  return(
    <View style={styles.containerStat}>
      <Text style={styles.textHeaderStat}>
        {header}
      </Text>
      <Text style={styles.textBodyStat}>
        {stat > 999 ? Math.round(stat / 1000).toString() + '.' + Math.round(stat / 100).toString().slice(-1) + 'k' : stat}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80
  },
  textHeaderStat : {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  textBodyStat : {
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: 16,
  }
});

export default DetailedStat