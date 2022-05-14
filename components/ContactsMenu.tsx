import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Jessy The",
    photo: require("../assets/no-profile.png"),
  },
  {
    type: "contact",
    name: "Nazariy Dumanakyy",
    photo: require("../assets/no-profile.png"),
  },
  {
    type: "contact",
    name: "Rafeh Qazi",
    photo: require("../assets/no-profile.png"),
  },
];

function ContactsMenu() {
  return (
    <View>
      {contactsMenuButtons.map((contact, index) => (
        <View style={styles.row} key={index}>
          {contact.type === "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
}

export default ContactsMenu;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
