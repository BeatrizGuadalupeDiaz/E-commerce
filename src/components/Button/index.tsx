import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = () => {
  return (
    <TouchableOpacity  onPress={()=> alert('hellow')}>
        <Text>Press me</Text>
    </TouchableOpacity>
  )
}

export default Button