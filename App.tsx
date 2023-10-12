import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { products } from "./src/test";
import { FlashList } from "@shopify/flash-list";
import { Card, Button } from "./src/components";
import { stylesGlobal } from "./src/components/styles/styles";
import { AntDesign } from "@expo/vector-icons";

const INITIAL_VALUE = 0;

export default function App() {
  const [cart, setCart] = React.useState([]);
  //renderizar el componente
  const total = cart
    ?.map(({ price }) => price)
    .reduce((acc, currentValue) => acc + currentValue, INITIAL_VALUE);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[stylesGlobal.title, styles.title]}>ECOMMERCE</Text>
      <View style={styles.containerShop}>
        <Text style={[stylesGlobal.text, styles.total]}>Total: $ {total}</Text>
        <View style={styles.shop}>
          <Text style={[stylesGlobal.title]}>{cart.length}</Text>
          <TouchableOpacity onPress={() => alert("Details")}>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: "90%", flex:1}}>
        <FlashList
          data={products}
          renderItem={({ item, index }) => (
            <Card key={index} product={item} setCart={setCart} cart={cart} />
          )}
          keyExtractor={(product) => product.id.toString()}
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
  },
  title: {
    color: "green",
    marginVertical: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  total: {
    color: "blue",
    marginVertical: 10,
  },
  containerShop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  shop: {
    flexDirection: "row",
    width: "15%",
    justifyContent: "space-between",
  },
});
