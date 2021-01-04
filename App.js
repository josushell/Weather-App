import React from "react";
import { Alert } from "react-native";
import Loading from "./loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./weather";

const API_KEY = "267f8f55dc1db1bb9bf435fb9c7ca0b1";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  // 날씨 api axios로 가져오기
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(data);

    this.setState({ 
      isLoading: false, 
      temp: data.main.temp,
      condition: data.weather[0].main
     });
  };

  getlocation = async () => {
    try {
      // 사용자 위치 정보 접근 허용
      await Location.requestPermissionsAsync();

      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      // api로 전달해서 weathter
      this.getWeather(latitude, longitude);

      this.setState({ isLoading: false });
      // 위치 정보 get 성공하면 로딩 벗어남

    } catch (error) {
      Alert.alert("location is not found", "please allow");
      // 위치 정보 허용 안하면 alert
    }
  };
  componentDidMount() {
    this.getlocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}