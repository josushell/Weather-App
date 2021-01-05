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
        mcolor: ["#16222a", "#3a6073"],
        title: "Thunderstorm Outside",
        subtitle: "Be careful"
    },
    Drizzle: {
        name: "weather-hail",
        mcolor: ["#4b79a1", "#283e51"],
        title: "Drizzle",
        subtitle: "It's drizzling"
    },
    Rain: {
        name: "weather-rainy",
        mcolor: ["#4b79a1", "#283e51"],
        title: "It's Raining",
        subtitle: "Take a rain check"
    },
    Snow: {
        name: "snowflake",
        mcolor: ["#77a1d3", "#79cbca", "#e684ae"],
        title: "Snow",
        subtitle: "Just, let it snow"
    },
    Atmosphere: {
        name: "weather-hail",
        mcolor: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "I'm sorry, What is it mean?"
    },
    Clear: {
        name: "weather-sunny",
        mcolor: ["#9cecfb", "#65c7f7", "#0052d4"],
        title: "Clear",
        subtitle: "What a Clear Sky!"
    },
    Clouds: {
        name: "weather-cloudy",
        mcolor: ["#283048", "#859398"],
        title: "Too Many Clouds",
        subtitle: "Such a gloomy day, isn't it?"
    },
    Mist: {
        name: "weather-cloudy",
        mcolor: ["#3a6186", "#89253e"],
        title: "Mist",
        subtitle: "It's Mist, Not A Spray"
    },
    Dust: {
        name: "weather-cloudy",
        mcolor: ["#ffe259", "#ffa751"],
        title: "Dust",
        subtitle: "OMG, Dust the furniture"
    },
    Haze: {
        name: "weather-hail",
        mcolor: ["#485563", "#29323c"],
        title: "Haze",
        subtitle: "Just Stay Home"
    },
};

export default function Weather({ temp, condition, location_city, location_country }) {
    return (
        <LinearGradient
            colors={options[condition].mcolor}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <View style={styles.locationcontainer}>
                <Text style={styles.location}>In {location_city} of {location_country},</Text>
                </View>
                <MaterialCommunityIcons name={options[condition].name} size={96} color="white" />
                <Text style={styles.text}>{temp} ℃</Text>
            </View>
            <View style={styles.halfcontainer}>
                <View style={styles.textcontainer}>
                    <Text style={styles.title}>
                        {options[condition].title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {options[condition].subtitle}
                    </Text>
                </View>
            </View>
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
    ]).isRequired,
    location_city: PropTypes.string.isRequired,
    location_country:PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfcontainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 42,
        color: "white"

    },
    location: {
        fontWeight: "500",
        fontSize: 39,
        color: "white"
    },
    locationcontainer: {
        alignItems: "center",
        paddingVertical: 20
    },
    title: {
        fontWeight: "600",
        fontSize: 43,
        color: "white",
        marginBottom: 15,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "400",
        fontSize: 24,
        color: "white",
        textAlign: "left"
    },
    textcontainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1

    }
});
