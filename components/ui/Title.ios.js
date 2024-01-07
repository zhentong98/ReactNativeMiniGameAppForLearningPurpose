import {StyleSheet, Text, Platform} from "react-native";

function TitleIos({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default TitleIos;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({android: 2, ios: 0}),
        padding: 12,
        maxWidth: '80%',
        width: 300
    },
});
