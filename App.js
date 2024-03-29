import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListingEditScreen />
    </SafeAreaView>
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
