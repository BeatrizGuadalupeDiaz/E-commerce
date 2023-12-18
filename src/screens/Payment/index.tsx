import { View, Text } from "react-native";

const Payment= ({route}: any) => {
    const {paymentOption} = route.params;

    return (
        <View>
            <Text>Payment</Text>
            {paymentOption ? <Text>Tarjeta</Text> : <Text>Efectivo</Text>}
        </View>
    );
};

export default Payment;
