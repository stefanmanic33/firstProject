import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
