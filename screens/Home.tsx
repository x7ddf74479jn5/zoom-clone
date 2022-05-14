import React from "react";
import { SafeAreaView, View } from "react-native";
import ContactsMenu from "../components/ContactsMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <View>
      <SafeAreaView>
        <Header />
        <SearchBar />
        <MenuButtons />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
}

export default Home;
