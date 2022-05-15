import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import type { RootStackNavigationProp } from "../Navigation";
import ContactsMenu from "../components/ContactsMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";

function Home({ navigation }: { navigation: RootStackNavigationProp }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
