import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { type } from "./types";
import { AntDesign } from "@expo/vector-icons";
import { setCart, deleteProduct } from "../../features/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../app/store";

const Card = ({product} : type) => {

  const dispatch = useDispatch()
  const cart = useSelector((state:rootState) => state.cart.product)

  const itemInCart = cart.filter((item)=> item.id === product.id).length

  const setToCart = () => {
    dispatch(setCart(product))
  };

  const deleteToCart = () => {
    dispatch(deleteProduct(product.id))
  }

  return (
    <View style={styles.Container}>
      <Text style={[styles.text, { fontWeight: "bold" }]}>{product.name}</Text>
      <Text style={styles.text}>{"$" + product.price}</Text>
      <Text style={styles.acountProduct}>Cantidad: {itemInCart}</Text>
      <View style={styles.containerBtns}>
        <TouchableOpacity style={styles.button} onPress={setToCart}>
          <Text style={styles.btnText}>Agregar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deleteToCart}
        >
          <AntDesign name="delete" size={24} color="#E64A18" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
