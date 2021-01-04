import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
// proptypes로 type 명시
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
// UI gradient 적용

const options = {
    Thunderstorm: {
        name: "weather-lightning-rainy",
        mcolor: ["#16222a","#3a6073"]
    },
    Drizzle: {
        name: "weather-rainy",
        mcolor: ["#4b79a1","#283e51"]
    },
    Rain: {
        name: "weather-rainy",
        mcolor: ["#4b79a1","#283e51"]
    },
    Snow: {
        name: "snowflake",
        mcolor: ["#77a1d3","#79cbca","#e684ae"]
    },
    Atmosphere: {
        name: "weather-hail",
        mcolor: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        name: "weather-sunny",
        mcolor: ["#2980b9","#6dd5fa","#ffffff"]
    },
    Clouds: {
        name: "weather-cloudy",
        mcolor: ["#283048","#859398"]
    },
    Mist: {
        name: "weather-cloudy",
        mcolor: ["#3a6186","#89253e"]
    },
    Dust: {
        name: "weather-cloudy",
        mcolor: ["#ffe259","#ffa751"]
    },
    Haze: {
        name: "weather-hail",
        mcolor: ["#485563","#29323c"]
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient 
            colors={options[condition].mcolor}
            style={styles.container}
        >
                  <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons name={options["Clear"].name} size={96} color="white" />
                <Text style={styles.text}>{temp}</Text>
            </View>

            <View style={styles.halfcontainer}></View>
        </LinearGradient>
    )
}

Weather.prototypes = {
    temp: PropTypes.number.isRequired,
    // isRequired: 필수 prop으로 인식함 오류 시 콘솔에서 확인 가능
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 42,
        color: "white"

    }
});
