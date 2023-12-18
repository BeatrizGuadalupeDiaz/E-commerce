import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Home, Cart} from '../../screens/index'

export type UserStackParams = {
  Home: undefined
  Cart: undefined
}

const StackNavigator = createNativeStackNavigator<UserStackParams>()

export const UserStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: true}}
      />
    </StackNavigator.Navigator>
  )
}
