import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { products } from "./src/test";
import CardProducts from "./src/components/CardProducts/Index";
import { FlashList } from "@shopify/flash-list";

export default function App() {
  const [cart, setCart] = React.useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ECOMMERCE</Text>
      <Text style={[styles.text, styles.number]}>{cart.length}</Text>
      <View style={{ width: "90%", flex: 1, borderWidth: 1 }}>
        <FlashList
          data={products}
          renderItem={({ item }) => (
            <CardProducts product={item} setCart={setCart} />
          )}
          keyExtractor={(item) => item.id.toString()}
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
