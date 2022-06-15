import { createStackNavigator } from "@react-navigation/stack";
import { Cart } from "../Cart";
import { CartIcon } from "../CartIcon";
import { MyDrawer } from "../MyDrawer";
import { ProductDetails } from "../ProductDetail";
import { ProductsList } from "../ProductsList";

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigator() {
  return (
    <Navigator initialRouteName="Products">
      <Screen
        name="Products"
        component={ProductsList}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerShown: false,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="Details"
        component={ProductDetails}
        options={({ route }) => ({
          headerShown: false,
          headerTitle: route.params.name,
          headerRight: (props) => <CartIcon {...props} />,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Navigator>
  );
}
