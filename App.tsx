import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { products } from "./src/test";
import { FlashList } from "@shopify/flash-list";
import { Card, Button } from "./src/components";

const INITIAL_VALUE = 0;
export default function App() {
  const [cart, setCart] = React.useState([]);
  //renderizar el componente
  const total = cart
    ?.map(({price}) => price)
    .reduce((acc, currentValue) => acc + currentValue, INITIAL_VALUE);
  console.log(total);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ECOMMERCE</Text> 
      <Text>total: {total}</Text>
      <Text style={[styles.text, styles.number]}>{cart.length}</Text>
      <View style={{ width: "90%", flex: 1, borderWidth: 1 }}>
        <FlashList
          data={products}
          renderItem={({item,index}) => <Card key={index} product={item} setCart={setCart} />}
          keyExtractor={product => product.id.toString()}
          numColumns={2}
          estimatedItemSize={100}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  number: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
});
