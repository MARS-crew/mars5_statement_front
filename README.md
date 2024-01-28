# Dice Frontend

### Stack Version

```
React-native : 0.73.2
Java version : 17
node : 18.17.1

```

### 실행 방법

```
1. git clone
2. cd mars5_statement_front
3. npm install
4. npm start
5. npm run android
```

src
┣ Api
┃ ┣ GoogleLogin
┃ ┃ ┣ FirebaseInit.js
┃ ┃ ┗ GoogleLoginApi.js
┃ ┗ index.js
┣ Assest
┃ ┣ Fonts
┃ ┣ Images
┃ ┃ ┗ image2.png
┃ ┗ Svg
┣ Components
┃ ┣ Button
┃ ┃ ┣ CaptureAndShareButton.js
┃ ┃ ┣ CustomButton.js
┃ ┃ ┗ FloatingButton.js
┃ ┣ Image
┃ ┃ ┣ LocalImage.js
┃ ┃ ┗ RemoteImage.js
┃ ┣ Login
┃ ┃ ┗ GoogleLoginButton.js
┃ ┣ Text
┃ ┃ ┣ CustomText.js
┃ ┃ ┗ LogoTitle.js
┃ ┗ View
┃ ┃ ┣ CustomView.js
┃ ┃ ┗ SwipeView.js
┣ Constants
┃ ┗ Colors.js
┣ Context
┃ ┣ AuthContext.js
┃ ┗ WriteContext.js
┣ Navigation
┃ ┣ DrawerNavigation.js
┃ ┣ RootNavigation.js
┃ ┣ StackNavigation.js
┃ ┗ TopTabNavigation.js
┣ Screen
┃ ┣ Home
┃ ┃ ┣ index.js
┃ ┃ ┣ Send.js
┃ ┃ ┗ Share.js
┃ ┣ Person
┃ ┃ ┣ PersonSend.js
┃ ┃ ┗ PersonSendDetailPage.js
┃ ┣ Round
┃ ┃ ┣ RoundSend.js
┃ ┃ ┗ RoundSendDetailPage.js
┃ ┗ NewTopicPage.js
┗ Utils
┃ ┗ Config.js
