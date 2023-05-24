import { Button, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation()


    const [fullName, setFullName] = useState(null)
    const [date, setDate] = useState(null)
    const [mobile, setMobile] = useState(null)
    console.log("fullName", fullName)
    console.log("date", date)
    console.log("mobile", mobile)
    return (
        <View style={styles.box}>
            <Image
                style={styles.logo}
                source={require("../../assets/logo.jpg")}
            />
            <Text style=
                {{
                    color: "#000000",
                    fontSize: 26,
                    marginTop: 15,
                    marginBottom: 15
                }} >Welcome to Embrace </Text>
            <ScrollView style={{ width: "80%" }}>
                <View>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ width: "100%", justifyContent: "center", alignItems: "center", }}>
                        <TextInput placeholder='Full Name' mode='flat' style={styles.inputfield} onChangeText={setFullName} />
                    </KeyboardAvoidingView>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <TextInput placeholder='Date of Birth ' mode='flat' style={styles.inputfield} onChangeText={setDate} />
                    </KeyboardAvoidingView>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <TextInput placeholder='Mobile Number ' style={styles.inputfield} onChangeText={setMobile} />
                    </KeyboardAvoidingView>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: "#E81F76",
                    borderRadius: 23,
                    height: 70,
                    width: "100%",
                    borderColor: "#E81F76",
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 60
                }} onPress={() => navigation.navigate("LastPeriod")} >
                    <Text style={{ fontSize: 28, color: "#ffff" }}>Sign in </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>

    )
}

export default Welcome

const styles = StyleSheet.create({
    box: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        paddingTop: 100,
        width: "100%"

    },
    logo: {
        width: 270,
        height: 250,
        resizeMode: "contain"
    },
    inputfield: {
        fontSize: 16,
        height: 80,
        width: "100%",
        borderWidth: 1,
        padding: 20,
        marginTop: 25,
        borderColor: "#E81F76",
        backgroundColor: "transparent",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    }
})