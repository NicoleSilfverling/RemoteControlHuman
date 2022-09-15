
import React from 'react'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'

const CTAButton = () => {

  return (
    <TouchableHighlight onPress={() => console.log("Button pressed")} 
    style={styles.container} activeOpacity={0.5}
    underlayColor="#67c904">
        <Text style={styles.textStyle}></Text>
    </TouchableHighlight>
    
  )
}

export default CTAButton


const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: '#FFF',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textStyle:{
        color: '#FFF',
        fontSize: 30
    },
  });