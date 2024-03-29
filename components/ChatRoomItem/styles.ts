import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    badgeContainer: {
      backgroundColor: "#69cc30",
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "white",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: 45,
      top: 10,
    },
    badgeText: {
      color: "white",
      fontSize: 12,
    },
    container: {
      flexDirection: "row",
      padding: 10,
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 30,
      marginRight: 10,
    },
    name: {
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: 3,
    },
    rightContainer: {
      flex: 1,
      justifyContent: "center",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    text: {
      color: "grey",
    },
  });
  
  export default styles;