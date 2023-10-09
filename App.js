import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/components/MessageScreen";

export default function App() {
  return (
    // <MessageScreen />
    <ViewImageScreen />
    // <ListingDetailsScreen />
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 50,
    //   }}
    // >
    //   <Card
    //     image={require("./app/assets/jacket.jpg")}
    //     title={"Black jacket for sale"}
    //     subTitle={"$100"}
    //   />
    // </View>
    // <WelcomeScreen />
    // <View style={styles.container}>
    //   {/* <AppText>I love React Native</AppText>
    //   <MaterialCommunityIcons name="email" size={100} /> */}
    //   <AppButton title={"Login"} onPress={() => console.log("Tapped")} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4ecdc4",
    alignItems: "center",
    justifyContent: "center",
  },
});
