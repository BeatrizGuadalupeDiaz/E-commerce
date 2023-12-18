import { View, Text } from "react-native";

import { DetailsProduct } from "../../components/index";
import { products } from "../../test";
const Cart = () => {
    const addToCart = () => {
        alert("Add to cart");
    };
    const removeFromCart = () => {
        alert("Remove from cart");
    };
    const cart = products;
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Cart</Text>
            <View
                style={{
                    width: "90%",
                    height: 150,
                }}>
                <DetailsProduct
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cart={products}
                />
            </View>
        </View>
    );
};
export default Cart
