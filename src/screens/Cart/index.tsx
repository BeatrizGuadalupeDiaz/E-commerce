import React from "react";
import { View, Text, Switch } from "react-native";
import { useSelector } from "react-redux";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { CustomButton, DetailsProduct } from "../../components/index";
import { rootState } from "../../app/store";
import { UserStackParams } from "../../navigation/user/Stack";

const Cart = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<UserStackParams>>();
    const cart = useSelector((state: rootState) => state.cart.product);
    // Primero, creamos un nuevo arreglo a partir de 'cart', pero transformando cada objeto a un string JSON
    const cartJSON = cart.map((item) => JSON.stringify(item));
    // Luego, creamos un Set a partir de ese arreglo para eliminar duplicados, y lo convertimos de nuevo a un arreglo
    const uniqueCartJSON = [...new Set(cartJSON)];
    // Finalmente, convertimos cada string JSON de vuelta a un objeto
    const uniqueCart = uniqueCartJSON.map((item) => JSON.parse(item));

    const [option, setOption] = React.useState(false);
    const switchSelected = () => setOption((prev: boolean) => !prev);
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Text>Cart</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Payment Options
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Switch
                    value={option}
                    onValueChange={() => switchSelected()}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={option ? "#f5dd4b" : "#f4f3f4"}
                />
                <Text>Tarjeta</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Switch
                    value={!option}
                    onValueChange={() => switchSelected()}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={!option ? "#f5dd4b" : "#f4f3f4"}
                />
                <Text>Efectivo</Text>
            </View>
            <CustomButton
                onClick={() => navigation.navigate("Payment",{paymentOption:option})}
                text="Comprar Productos"
            />
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
