import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import { btnStyles, txtStyles } from "./styles";
import { Props } from "./types";
type ButtonProps = TouchableOpacityProps & Props;
const CustomButton = ({onClick,text,type='default'} : ButtonProps) => {
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
