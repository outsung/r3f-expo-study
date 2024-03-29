import create from "zustand";

interface SocketStore {
  mySocketId: string | null;
  setMySocketId: (mySocketId: string) => void;
}
export const useSocketStore = create<SocketStore>((set) => ({
  mySocketId: null,
  setMySocketId: (mySocketId: string) =>
    set((state) => ({ ...state, mySocketId })),
}));
