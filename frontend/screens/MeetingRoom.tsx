import React from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";
import StartMeeting from "../components/StartMeeting";

const MeetingRoom: React.FC = () => {
  const [name, setName] = React.useState("");
  const [roomId, setRoomId] = React.useState("");

  const props = {
    name,
    setName,
    roomId,
    setRoomId,
  };

  return (
    <View style={styles.container}>
      <StartMeeting {...props} />
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
});
