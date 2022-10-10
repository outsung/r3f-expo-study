import { Text, View } from "react-native";

export function R3fObjectListEmpty() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>웹에서 로그인 후 오브젝트를 선택해주세요.</Text>
    </View>
  );
}
