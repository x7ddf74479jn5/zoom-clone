import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type StartMeetingProps = {
  text: string;
  roomId: string;
  setText: (text: string) => void;
  setRoomId: (roomId: string) => void;
};

const StartMeeting: React.FC<StartMeetingProps> = ({ text, roomId, setText, setRoomId }) => {
  return (
    <View style={styles.container}>
      <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={text}
            placeholder="Enter name"
            placeholderTextColor="#767476"
            onChangeText={(text) => setText(text)}
          ></TextInput>
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={roomId}
            placeholder="Enter roomId"
            placeholderTextColor="#767476"
            onChangeText={(text) => setRoomId(text)}
          ></TextInput>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.startMeetingButton} onPress={() => {}}>
            <Text style={styles.startMeetingText}>Start Meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
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
  startMeeting: {},
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
