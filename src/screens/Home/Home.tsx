import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";

import { Card } from "../../components/index";
import { stylesGlobal } from "../../styles/styles";
import { AntDesign } from "@expo/vector-icons";
import type { rootState } from "../../app/store";
import { useSelector } from "react-redux"; //leer estado - funciones(pone valor)
import { products } from "../../test";
import { Colors } from "../../constants/Colors";
import { styles } from "./styles";
import { UserStackParams } from "../../navigation/user/Stack";

const INITIAL_VALUE = 0;

export default function Home() {
    const navigation =
        useNavigation<NativeStackNavigationProp<UserStackParams>>();
    const cart = useSelector((state: rootState) => state.cart.product);
    //renderizar el componente
    const total = cart
        ?.map(({ price }) => price)
        .reduce((acc, currentValue) => acc + currentValue, INITIAL_VALUE);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={[stylesGlobal.title, styles.title]}>E-COMMERCE</Text>
            <View style={styles.containerShop}>
                <Text style={[stylesGlobal.text, styles.totalText]}>
                    Total: $ {total}
                </Text>
                <View style={styles.shop}>
                    <Text style={[stylesGlobal.title, { color: Colors.white }]}>
                        {cart.length}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Cart")}>
                        <AntDesign
                            name="shoppingcart"
                            size={24}
                            color={Colors.white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: "90%", flex: 1 }}>
                <FlashList
                    data={products}
                    renderItem={({ item, index }: any) => (
                        <Card key={index} product={item} />
                    )}
                    keyExtractor={(product: any) => product.id.toString()}
                    numColumns={2}
                    estimatedItemSize={100}
                />
            </View>
        </SafeAreaView>
    );
}
