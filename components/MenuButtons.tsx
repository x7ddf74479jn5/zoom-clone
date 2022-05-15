import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { RootStackNavigationProp } from "../Navigation";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    customColor: "#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];

type MenuButtonProps = {
  navigation: RootStackNavigationProp;
};

const MenuButtons: React.FC<MenuButtonProps> = ({ navigation }) => {
  const openMeeting = () => {
    navigation.navigate("Room");
  };

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View style={styles.buttonContainer} key={item.id}>
          <TouchableOpacity
            onPress={() => openMeeting()}
            style={{ ...styles.button, backgroundColor: item.customColor ? item.customColor : "#0470DC" }}
          >
            <FontAwesome name={item.name} size={23} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
});
