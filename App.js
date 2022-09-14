import { Button, StyleSheet, Text, View, Platform, StatusBar, SafeAreaView} from 'react-native';
import CTAButton from './components/CTAButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.textStyle}>RemoteControlHuman</Text>
      <View style={styles.leftside}>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
      </View>
      <View style={styles.rightside}>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  leftside:{
    width: '40%',
    height: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightside:{
    width: '40%',
    height: '100%',
    backgroundColor: 'blue',
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    color: '#FFF',
    fontSize: 30
  },
});
