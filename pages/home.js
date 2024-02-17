import { StyleSheet, View, Text, Button } from 'react-native'
export default function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>home</Text>
      <Button title="Go to detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  )
}

