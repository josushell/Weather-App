import React from "react";
import {View, Text, StyleSheet} from "react-native";
import PropTypes from "prop-types";
// proptypes로 type 명시

export default function Weather({temp}){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{temp} 'C</Text>
        </View>
    )
}

Weather.prototypes = {
    temp: PropTypes.number.isRequired
    // isRequired: 필수 prop으로 인식함 오류 시 콘솔에서 확인 가능
};

const styles = StyleSheet.create({
    container:{
        flex: 1 ,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 33

    }
});
