import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

import Message from "../components/Message";
import chatRoomsData from "../assets/dummy-data/Chats"

export default function ChatRoomScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData.messages}
        renderItem={({item})=><Message message={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
