import { StyleSheet, Text, View } from 'react-native'
import { CalendarList } from 'react-native-calendars';
import React, { useState } from 'react'

const pastrang = 1;
const futurerang = 0;
var initionaldate = new Date();

const LastPeriod = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={styles.boxx}>
      <Text style={{ color: "#000000", fontSize: 24, fontWeight: 400, }} >When did your last period start? </Text>

      <CalendarList pastScrollRange={pastrang} futureScrollRange={futurerang} markingType='dot' />
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