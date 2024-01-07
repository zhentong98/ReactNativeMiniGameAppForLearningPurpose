import {Dimensions, StyleSheet, View} from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // for android only

        shadowColor: 'black', // for ios only
        shadowOffset: {width: 0, height: 2}, // for ios only
        shadowRadius: 6, // for ios only
        shadowOpacity: 0.25, // for ios only
    },
})
