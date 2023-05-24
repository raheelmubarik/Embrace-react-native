import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LastPeriod = () => {
  return (
    <View style={styles.boxx}> 
     <Text style={{color: "#000000",fontSize: 24,fontWeight:400,}} >When did your last period start? </Text>
    </View>
  )
}

export default LastPeriod

const styles = StyleSheet.create({
    boxx: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    width: "100%"

},
    
})