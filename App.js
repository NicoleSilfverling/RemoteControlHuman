import { StyleSheet, View, Platform, StatusBar, SafeAreaView, Image} from 'react-native';
import CTAButton from './components/CTAButton';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.leftside}>
      <View style={styles.colStyle}>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
      </View>
      <View style={styles.colStyle}>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
      
      </View>
       <View style={styles.colStyle}>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
      </View>
      </View>
      

      <View style={styles.center}>
      <Image
        style={styles.tinyLogo}
          source={require('./assets/images/human.jpg')}
        />
      </View>
    



      <View style={styles.rightside}>
        <View style={styles.colStyle}>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
      </View>
        <View style={styles.colStyle}>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
      </View>
        <View style={styles.colStyle}>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
        <CTAButton/>
      </View>
        
        
      </View>
      <StatusBar hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  leftside:{
    width: '40%',
    height: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    flexDirection : 'row',
    justifyContent: 'space-evenly',
    padding : 10,
  },

  center:{
    width: '25%',
    height : '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  rightside:{
    width: '40%',
    height: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    flexDirection : 'row',
    justifyContent: 'space-evenly',
    padding : 10,
  },
  textStyle:{
    color: '#FFF',
    fontSize: 30
  },
  colStyle:{
    justifyContent: 'space-evenly',
    height : '100%',

  },
  tinyLogo: {
    width: '100%',
    height: '100%',

  
  },
});
