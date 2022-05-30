import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import { API_URL } from "@env";
import { Camera, CameraType } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import type { User } from "../../shared/types";

import StartMeeting from "../components/StartMeeting";

const menuItems = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
];

let socket: Socket;

const MeetingRoom: React.FC = () => {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [activeUsers, setActiveUsers] = useState<User[]>([]);
  const [startCamera, setStartCamera] = useState(false);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Camera permission denied");
    }
  };

  const joinRoom = () => {
    __startCamera();
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
    socket.on("all-users", (users: User[]) => {
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
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={CameraType.front}
                style={{ width: activeUsers.length <= 1 ? "100%" : 200, height: activeUsers.length <= 1 ? 600 : 200 }}
              ></Camera>
              {activeUsers
                .filter((user) => user.userName !== name)
                .map((user, index) => (
                  <View key={index} style={styles.activeUserContainer}>
                    <Text style={{ color: "white " }}>{user.userName}</Text>
                  </View>
                ))}
            </View>
          </View>
          <View style={styles.menu}>
            {menuItems.map((item) => (
              <TouchableOpacity key={item.id} style={styles.tile}>
                <FontAwesome name={item.name} size={24} color={item.customColor} />
                <Text style={styles.textTile}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting {...props} />
      )}
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  textTile: {
    color: "white",
    marginTop: 10,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cameraContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  activeUsersContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  activeUserContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
