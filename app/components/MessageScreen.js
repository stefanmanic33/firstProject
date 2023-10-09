import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/profilePicture.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/profilePicture.jpg"),
  },
];

function MessageScreen(props) {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
        />
      )}
    />
  );
}

export default MessageScreen;
