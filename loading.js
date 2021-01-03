import React from "react"; 
// react 변수 사용
import {StyleSheet, Text, View} from "react-native";
import * as Font from 'expo-font';
// font 사용

// export를 default로 하면 import할 때 {} 안붙여도 ㄱㅊ
Font.loadAsync({'Jura-VariableFont_wght': require('./assets/fonts/Jura-VariableFont_wght.ttf'),});

export default function loading(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                What's{"\n"}Weather Today
            </Text>
        </View>

    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 50,
        paddingVertical: 100,
        backgroundColor: "#00A5FF"
    },
    text:{
        color: "white",
        fontSize:33
    }
});