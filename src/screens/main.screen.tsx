import { useEffect } from "react";
import { useSocket } from "../hooks/socket";
import Socket from "../socket";
import { R3fObjectList } from "../components/r3fObject";

export function MainScreen() {
  useSocket();
  useEffect(() => {
    Socket.emit("joinRoom", { room: "testRoom", email: "" });
  }, []);

  return <R3fObjectList />;
}
