import { StyleSheet, View, Platform, StatusBar, SafeAreaView} from 'react-native';
import CTAButton from './components/CTAButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

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
      <StatusBar hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  leftside:{
    width: '40%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },
  rightside:{
    width: '40%',
    height: '100%',
    backgroundColor: 'black',
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
