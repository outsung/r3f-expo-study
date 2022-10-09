import { Text, View } from "react-native";
import { useSocket } from "../hooks/socket";
import { useSocketStore } from "../stores";

export function MainScreen() {
  useSocket();

  const mySocketId = useSocketStore((state) => state.mySocketId);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>id : {mySocketId}</Text>
      <Text>웹에서 로그인 후 오브젝트를 선택해주세요.</Text>
    </View>
  );
}
