import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import { API_URL } from "@env";

import type { User } from "../../shared/types";

import StartMeeting from "../components/StartMeeting";

let socket: Socket;

const MeetingRoom: React.FC = () => {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [activeUsers, setActiveUsers] = useState<User[]>([]);

  const joinRoom = () => {
    socket.emit("join-room", {
      roomId,
      userName: name,
    });
  };

  useEffect(() => {
    socket = io(API_URL);
    socket.on("connection", () => {
      console.log("connected");
    });
    socket.on("all-users", (users) => {
      console.log("Active users: ", users);
      setActiveUsers(users);
    });
  }, []);

  const props = {
    name,
    setName,
    roomId,
    setRoomId,
    joinRoom,
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
