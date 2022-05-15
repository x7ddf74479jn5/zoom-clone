import React from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import MeetingRoom from "./screens/MeetingRoom";

type RootStackParamList = {
  Home: undefined;
  Room: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

function Navigation() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Room"
          component={MeetingRoom}
          options={{
            title: "start a new meeting",
            headerStyle: {
              backgroundColor: "#1c1c1c",
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
