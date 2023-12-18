import Home from "./src/screens/Home/Home";
import { Provider } from "react-redux";
import store from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import {UserStack} from "./src/navigation/user/Stack";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <UserStack />
            </NavigationContainer>
        </Provider>
    );
}
