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
        color: ["#16222a","#3a6073"]
    },
    Drizzle: {
        name: "weather-rainy",
        color: ["#4b79a1","#283e51"]
    },
    Rain: {
        name: "weather-rainy",
        color: ["#4b79a1","#283e51"]
    },
    Snow: {
        name: "snowflake",
        color: ["#77a1d3","#79cbca","#e684ae"]
    },
    Atmosphere: {
        name: "air-filter",
        color: ["#acb6e","#86fde8"]
    },
    Clear: {
        name: "weather-sunny",
        color: ["#2980b9","#6dd5fa","#ffffff"]
    },
    Clouds: {
        name: "weather-cloudy",
        color: ["#283048","#8593980"]
    },
    Dust: {
        name: "weather-cloudy",
        color: ["#ffe259","#ffa751"]
    },
    Haze: {
        name: "weather-hail",
        color: ["#485563","#29323c"]
    },
    Mist: {
        name: "weather-cloudy",
        color: ["#3a6186","#89253e"]
    },
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient 
            colors={options[condition].color}
            style={styles.container}
        >
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons name={options[condition].name} size={96} color="white" />
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
        "Dust",
        "Haze",
        "Mist",
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
