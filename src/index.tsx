import { LoginScreen } from "./screens/login.screen";
import { MainScreen } from "./screens/main.screen";
import { useAppStore } from "./stores";

export function Navigator() {
  const token = useAppStore((state) => state.token);

  return token ? <MainScreen /> : <LoginScreen />;
}
