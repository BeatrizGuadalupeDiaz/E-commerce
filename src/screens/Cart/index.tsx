import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { DetailsProduct } from "../../components/index";
import { FlashList } from "@shopify/flash-list";
import { rootState } from "../../app/store";
import { setCart } from "../../features/cartReducer";

const Cart = () => {
    const cart = useSelector((state: rootState) => state.cart.product);
    // Primero, creamos un nuevo arreglo a partir de 'cart', pero transformando cada objeto a un string JSON
    const cartJSON = cart.map((item) => JSON.stringify(item));
    // Luego, creamos un Set a partir de ese arreglo para eliminar duplicados, y lo convertimos de nuevo a un arreglo
    const uniqueCartJSON = [...new Set(cartJSON)];
    // Finalmente, convertimos cada string JSON de vuelta a un objeto
    const uniqueCart = uniqueCartJSON.map((item) => JSON.parse(item));
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Text>Cart</Text>
            <View
                style={{
                    width: "90%",
                    height: "100%",
                }}>
                <FlashList
                    data={uniqueCart}
                    renderItem={({ item, index }) => (
                        <DetailsProduct id={index} cart={cart} product={item} />
                    )}
                    estimatedItemSize={100}
                />
            </View>
        </View>
    );
};
export default Cart;
