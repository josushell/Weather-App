# Weather App (Ios / Android)     
    
Using React Native and expo     
     
## 1. What's weather today
'What's weather today' is a basic weather mobile application that takes your location and provides you with weather information from the weather api     
     
'What's weather today' 앱은 기본적인 날씨 모바일 앱으로써, 사용자의 위치를 받아와서 날씨 api에서 가져온 날씨 정보를 알려줍니다. (native가 아닌 프레임워크는 처음으로 도전,,,)     
     
* React native (with Javascript)    
* Expo    
* Axios (for weather api)    
* weather api (openweathermap)    
    
## 2. Screenshots
<div>
<img src="img/loading">
<img src="img/clear">
<img src="img/rain">
<img src="img/cloudy">
<img src="img/snow">
<img src="img/thunder">
<img src="img/mist">
<img src="img/dust">
</div>   
   
There's still more weather options   
이를 제외한 날씨 옵션도 다양하게 있습니다   
   
## 3. How to build
앱스토어/ 플레이 스토어에 출시는 하지 않았습니다 (왜냐면 너무 기본적이라 아무도 안쓸듯)   
##### using expo
If you have an expo app on your phone, run this QR code on the expo app. Or use this URL.    
     
expo 앱을 폰에 가지고 있다면 expo 앱에서 아래의 QR 코드를 실행하거나 URL을 이용하세요    

<img width="30", height="30" src="img/qr">    
   
expo link: [Expo app](https://expo.io/@josushell/projects/weathertoday, "expo")    


***    
## 4. retrospect
xcode/swift 또는 android studio/java or kotlin 등의 native 환경을 안써도 만들 수 있는게 제일 큰 장점인듯  
쉽고 간편하게 만들 수 있지만 기능면에서는 native보다 제한적인 것들이 많다  
버그가 발생했을 때도 원인을 찾기 힘들다는게 함정(라이브러리 의존성이 높아서)   
크기가 큰 앱은 react native를 이용하기에는 무리가 있고 ToDoList 앱이나 날씨 앱 등 크기가 작고 서버 통신을 적게 해도 되는 앱은 react native로 만드는게 확실히 편할듯 ( because it's really easy right?)     
