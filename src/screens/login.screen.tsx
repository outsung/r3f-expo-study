import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button, Input } from "../components/common";
import { useAppStore } from "../stores";

const url = "https://tie-video-chat-app.herokuapp.com";

export function LoginScreen() {
  const setToken = useAppStore((state) => state.setToken);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const login = async ({ name, code }: { name: string; code: string }) => {
    const res = await fetch(url + "/api/v1/auth/login", {
      headers: new Headers({ "Content-Type": "application/json" }),
      method: "POST",
      body: JSON.stringify({ email: name, code: code }),
    }).then((res) => res.json());

    if (res.result) {
      setToken(res.result.token.token);
    } else {
      console.log(res);
      Alert.alert("잘못된 로그인 정보입니다.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ paddingVertical: 30 }}>
        <Text>로그인 해주세요.</Text>
      </View>
      <View style={{ width: 300 }}>
        <Input
          placeholder="name"
          onChangeText={setName}
          style={{ marginBottom: 8 }}
        />
        <Input
          placeholder="code"
          onChangeText={setCode}
          style={{ marginBottom: 32 }}
        />

        <Button
          title="로그인"
          onPress={() => login({ name, code })}
          style={{ marginBottom: 16 }}
        />
        <Button
          title="테스트 1"
          onPress={() =>
            login({ name: "insung9546@gmail.com", code: "123456" })
          }
          style={{ marginBottom: 16 }}
        />
        <Button
          title="테스트 2"
          onPress={() => login({ name: "test@gmail.com", code: "123456" })}
          style={{ marginBottom: 16 }}
        />
      </View>
    </View>
  );
}
