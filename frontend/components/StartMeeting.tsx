import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type StartMeetingProps = {
  name: string;
  roomId: string;
  setName: (name: string) => void;
  setRoomId: (roomId: string) => void;
  joinRoom: () => void;
};

const StartMeeting: React.FC<StartMeetingProps> = ({ name, roomId, setName, setRoomId, joinRoom }) => {
  return (
    <View style={styles.startMeetingContainer}>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={name}
          placeholder="Enter name"
          placeholderTextColor="#767476"
          onChangeText={(name) => setName(name)}
        ></TextInput>
      </View>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={roomId}
          placeholder="Enter room id"
          placeholderTextColor="#767476"
          onChangeText={(room) => setRoomId(room)}
        ></TextInput>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.startMeetingButton} onPress={() => joinRoom()}>
          <Text style={styles.startMeetingText}>Start Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  startMeetingContainer: {},
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMeetingText: {
    color: "white",
    fontWeight: "bold",
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470DC",
    height: 50,
    borderRadius: 15,
  },
});
