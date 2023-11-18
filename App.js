import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/components/MessageScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState } from "react";
import AccountScreen from "./app/components/AccountScreen";
import ListiningScreen from "./app/components/ListiningScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categoties = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categoties[0]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        {/* <TextInput
          placeholder="First Name"
          style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
        /> */}
        {/* <AppTextInput placeholder="Username" icon={"email"} /> */}
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          items={categoties}
          icon="apps"
          placeholder="Category"
        />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen>
      {/* <Screen>
        <ListItem
          title="My Title"  
          subTitle="My Subtitle"
          IconComponent={<Icon name="email" />}
        />
        <ListItem
          title="My Title"
          subTitle="My Subtitle"
          IconComponent={<Icon name="email" />}
        />
      </Screen> */}
      {/* <ListiningScreen /> */}
    </GestureHandlerRootView>

    // <MessageScreen />
    // <ViewImageScreen />
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
