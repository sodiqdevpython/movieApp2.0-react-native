import { StyleSheet, View, Text, Button } from 'react-native'
export default function Detail({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Detail</Text>
      <Button title='Go to home' onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}

