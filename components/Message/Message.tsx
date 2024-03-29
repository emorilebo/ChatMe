import React from "react";
import { View, Text, StyleSheet } from "react-native";

const blue = "#3777f0";
const gray = "lightgrey";

const myID = "u1";

const Message = ({ message }) => {
  const isMe = message.user.id === myID;
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.sendingContainer : styles.receivingContainer,
      ]}
    >
      <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  receivingContainer: {
    backgroundColor: blue,
    marginLeft: 10,
    marginRight: "auto",
  },
  sendingContainer: {
    backgroundColor: gray,
    marginLeft: "auto",
    marginRight: 10,
  },
});

export default Message;
