import {useState} from "react";
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient"
import {useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler() {
        setGameIsOver(true);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen/>
    }

    return (
        <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
            <ImageBackground
                style={styles.rootScreen}
                source={require("./assets/images/background.png")}
                resizeMode={"cover"}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15
    }
});
