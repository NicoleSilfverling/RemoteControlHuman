
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CTAButton = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Hello</Text>
    </View>
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
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    textStyle:{
        color: '#FFF',
        fontSize: 30
    },
  });