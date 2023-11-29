import { View, Text } from "react-native";

import { Props } from "./types";
import { styles } from "./styles";
const DetailsProduct = ({addToCart,removeFromCart,cart}:Props) => {
    return (
        <View style={styles.Container}>
            <View style={styles.imageContainer}>
                <Text>Image</Text>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.productContainer}>
                    <Text>{cart[0].name}</Text>
                </View>
                <View style={styles.totalProductContainer}>
                    <Text>$ {cart[0].price}</Text>
                    <Text>-+</Text>
                </View>
            </View>
        </View>
    );
};

export default DetailsProduct;
