import { useEffect } from "react";
import Socket from "../../socket";
import { useSocketStore } from "../../stores";
import { SocketEvent } from "../../types/socket";

export default function useSocketEventOn<E extends keyof SocketEvent>(
  event: E,
  cb: (d: SocketEvent[E]) => void
) {
  const mySocketId = useSocketStore((state) => state.mySocketId);

  useEffect(() => {
    console.log("event", event, !!Socket.instance);
    Socket.instance?.on<keyof SocketEvent>(event, cb);

    return () => {
      Socket.instance?.off<keyof SocketEvent>(event, cb);
    };
  }, [mySocketId]);
}
