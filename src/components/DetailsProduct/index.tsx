import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { Props } from "./types";
import { styles } from "./styles";
import { deleteProduct, setCart } from "../../features/cartReducer";

const DetailsProduct = ({ id, product, cart }: Props) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(setCart(product));
    };
    const removeFromCart = () => {
        dispatch(deleteProduct(product.id));
    };
    const productInCart = cart.filter((item) => item.id === product.id).length;
    const INITIAL_VALUE = 0;
    const pricePerProduct = cart
        .filter((item) => item.price === product.price)
        .reduce((acc, currentValue) => acc + currentValue.price, INITIAL_VALUE);

    return (
        <View style={styles.Container} key={id}>
            <View style={styles.imageContainer}>
                <Text>Image</Text>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.productContainer}>
                    <Text>{product.name}</Text>
                    <Text>cantidad:{productInCart}</Text>
                </View>
                <View style={styles.totalProductContainer}>
                    <Text>$ {pricePerProduct}</Text>
                    <TouchableOpacity onPress={addToCart}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={removeFromCart}>
                        <Text>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default DetailsProduct;
