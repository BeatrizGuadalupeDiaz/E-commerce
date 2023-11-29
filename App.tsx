import Home from "./src/screens/Home/Home";
import { Provider } from "react-redux";
import store from "./src/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

