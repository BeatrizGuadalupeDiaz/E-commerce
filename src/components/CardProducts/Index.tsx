import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { type } from "./types";

const Card = ({product, setCart} : type) => {
  
  const setToCart = () => {
    setCart((prev: any) => [...prev, product]);
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.text}>{product.name}</Text>
      <Text style={styles.text}>{product.price}</Text>
      <TouchableOpacity style={styles.button} onPress={setToCart}>
        <Text>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
