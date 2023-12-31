import { StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    Container: {
        width: "90%",
        height: 140,
        backgroundColor: Colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        margin: "5%",
        borderRadius: 15,
        justifyContent: "space-around",
        padding: 10,
    },
    text: {
        fontSize: 16,
        marginVertical: 10,
        color: Colors.black,
    },
    button: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.tertiary,
    },
    btnText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: "700",
    },
    containerBtns: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "85%",
        marginVertical: 10,
    },
    acountProduct: {
        marginVertical: 15,
        fontSize: 14,
        fontWeight: "bold",
    },
});
