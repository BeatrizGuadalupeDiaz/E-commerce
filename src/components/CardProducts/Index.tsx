import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { type } from "./types";
import { AntDesign } from "@expo/vector-icons";

const Card = ({ product, setCart, cart }: type) => {
  const setToCart = () => {
    setCart((prev: any) => [...prev, product]);
  };

  const deleteToCart = () => {
    /* const names = [{id:1,name:'1'},{id:2,name:'2'},{id:3,name:'3'}]
    const newCart = names.splice(2,1);
    console.log(newCart)
    console.log(names) */
    //console.log(cart.splice(1, 1))
    console.log(setCart(cart))
  }

  return (
    <View style={styles.Container}>
      <Text style={[styles.text, { fontWeight: "bold" }]}>{product.name}</Text>
      <Text style={styles.text}>{"$" + product.price}</Text>
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
