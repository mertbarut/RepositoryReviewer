import { View, Text, StyleSheet } from 'react-native'

export interface StatProps {
  header: string,
  stat: number
}

const Stat = ( {header, stat} : StatProps ) => {
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
  separator: {
    height: 10,
    backgroundColor: '#6495ED'
  },
  container: {
    flexDirection: "column",
  },
  containerTop: {
    flex: 1,
    flexDirection: "row",
    minHeight: 120,
    padding: 20,
  },
  containerBottom: {
    flex: 1,
    flexDirection: "row",
    height: 60,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5
  },
  name: {
    paddingTop: 4,
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  containerName: {
    flexDirection: 'row',
    flex: 1,
    minWidth: 100,
    paddingBottom: 2,
    flexWrap: 'wrap'
  },
  containerDescription: {
    flexDirection: 'row',
    flex: 1,
    minWidth: 300,
    paddingBottom: 2,
    flexWrap: 'wrap'
  },
  containerStat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    paddingBottom: 4,
    fontWeight: 'normal',
    flex: 1,
    flexWrap: 'wrap',
    color: '#666666'
  },
  containerLanguage: {
    backgroundColor: '#4C4CFF',
    borderRadius: 10,
    maxWidth: 100,
    alignItems: 'center'
  },
  language: {
    paddingVertical: 2,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  textHeaderStat : {
    fontWeight: 'bold'
  },
  textBodyStat : {
    fontWeight: 'normal'
  }
});

export default Stat