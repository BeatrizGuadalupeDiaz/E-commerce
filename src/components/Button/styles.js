import { StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

export const btnStyles = StyleSheet.create({
    general: {
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
    },
    default:{
        backgroundColor: Colors.gray,
    },
    add: {
        backgroundColor: Colors.tertiary,
    },
});
export const txtStyles = StyleSheet.create({
    general: {
        fontSize: 14,
        fontWeight: "700",
    },
    default:{
        color: Colors.black,
    },
    add: {
        color: Colors.white,
    },
});
