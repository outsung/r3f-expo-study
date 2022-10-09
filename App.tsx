import { View } from "react-native";
import CanvasContainer from "./src";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <CanvasContainer />
    </View>
  );
}
