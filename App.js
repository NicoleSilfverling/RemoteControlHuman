import { Button, StyleSheet, Text, View, Platform, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>RemoteControlHuman</Text>
      <Button
        title='button'
        color='blue'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textStyle:{
    color: '#FFF',
    fontSize: '30',
  },
});
