import { StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.gray,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 15,
        borderWidth: 1,
    },
    imageContainer: {
        flex: 1,
        backgroundColor: Colors.gray,
        borderRadius: 15,
        borderWidth: 1,
        marginRight: 15,
    },
    detailsContainer: {
        flex: 3,
        borderWidth: 1,
        backgroundColor: Colors.gray,
    },
    productContainer: {
        flex: 2,
        borderWidth: 1,
        backgroundColor: Colors.gray,
        padding: 10,
    },
    totalProductContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        backgroundColor: Colors.gray,
        padding: 10,
    },
});
