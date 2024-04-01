import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Black jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/profilePicture.jpg")}
            title={"Mikle Oliver"}
            subTitle={"5 Listings"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    fontSize: 18,
    marginTop: 7,
    color: colors.secondary,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
