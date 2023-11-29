import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";
import { type } from "./types";
import { Colors } from "../../constants/Colors";
import { rootState } from "../../app/store";
import { setCart, deleteProduct } from "../../features/cartReducer";
import CustomButton from "../Button/index";

const Card = ({ product }: type) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: rootState) => state.cart.product);
    const itemInCart = cart.filter((item) => item.id === product.id).length;

    const setToCart = () => {
        dispatch(setCart(product));
    };

    const deleteToCart = () => {
        dispatch(deleteProduct(product.id));
    };

    return (
        <View style={styles.Container}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>
                {product.name}
            </Text>
            <Text style={styles.text}>{"$" + product.price}</Text>
            <Text style={styles.acountProduct}>Cantidad: {itemInCart}</Text>
            <View style={styles.containerBtns}>
                <CustomButton text="Agregar" onClick={setToCart} type="add" />
                <TouchableOpacity onPress={deleteToCart}>
                    <AntDesign name="delete" size={24} color={Colors.alert} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Card;
