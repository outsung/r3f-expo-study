import { useEffect } from "react";
import Socket from "../../socket";
import { useSocketStore } from "../../stores";

export function useSocket() {
  const setMySocketId = useSocketStore((state) => state.setMySocketId);

  useEffect(() => {
    Socket.init();

    Socket.instance?.on("connect_error", (err) => {
      console.log("connect_error!!", err.name, err.message);
    });
    Socket.instance?.on("connect", () => {
      console.log("setMySocketId : ", Socket.instance?.id);
      if (Socket.instance?.id) {
        setMySocketId(Socket.instance.id);
      }
    });

    return () => {
      Socket.disconnect();
    };
  }, []);
}
