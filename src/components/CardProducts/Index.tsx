import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Product {
    id: number;
    name: string;
    price: number;
}
interface type{
    product: Product;
    setCart: any;
}
const Index = ({product, setCart} : type) => {
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
const styles = StyleSheet.create({
  Container: {
    width: "90%",
    height: 100,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    margin: "3%",
  },
  text: {
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    backgroundColor: "white",
  },
});
export default Index;
