import { StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
    },
    title: {
        color: Colors.tertiary,
        marginVertical: 20,
        alignSelf: "flex-start",
        marginLeft: 20,
    },
    totalText: {
        color: Colors.white,
        marginVertical: 10,
    },
    containerShop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        borderWidth: 1,
        borderColor: Colors.white,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    shop: {
        flexDirection: "row",
        width: "15%",
        justifyContent: "space-between",
        alignItems: "center",
    },
});