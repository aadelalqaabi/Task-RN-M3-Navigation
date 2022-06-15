import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { MyDrawer } from "./components/MyDrawer";
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
