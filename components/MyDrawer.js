import { createDrawerNavigator } from "@react-navigation/drawer";
import { Cart } from "./Cart";
import RootNavigator from "../components/Navigation";

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Products" component={RootNavigator} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
}
