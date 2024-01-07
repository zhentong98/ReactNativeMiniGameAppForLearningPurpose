import {useState} from "react";
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {LinearGradient} from "expo-linear-gradient"
import * as Font from 'expo-font';
import {useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import {Entypo} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar"

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })

    if (!fontsLoaded) {
        async function prepare() {
            try {
                await Font.loadAsync(Entypo.font);
                await new Promise(resolve => setTimeout(resolve, 2000));

            } catch (e) {
                console.log(e);
            } finally {
                await SplashScreen.hideAsync();
            }
        }

        return;
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen
            userNumber={userNumber}
            roundsNumber={guessRounds}
            onStartNewGame={startNewGameHandler}/>
    }

    return (
        <>
            <StatusBar style={"light"} />
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
        </>
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
