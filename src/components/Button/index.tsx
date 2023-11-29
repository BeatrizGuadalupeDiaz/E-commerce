import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { btnStyles, txtStyles } from "./styles";
import { Props } from "./types";

const CustomButton = ({ text, onClick, type = "default" }: Props) => {
    return (
        <TouchableOpacity
            onPress={onClick}
            style={{ ...btnStyles.general, ...btnStyles[type] }}>
            <Text style={{ ...txtStyles.general, ...txtStyles[type] }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
