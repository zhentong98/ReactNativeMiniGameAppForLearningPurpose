import {StyleSheet, Text, View} from "react-native";

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
            {/*GUESS*/}
            <View>
                <Text>Higher or lower?</Text>
            </View>
            <View>
                {/*Log Rounds*/}
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12
    }
});
