import create from "zustand";

interface AppStore {
  token: string | null;
  setToken: (token: string) => void;
}
export const useAppStore = create<AppStore>((set) => ({
  token: null,
  setToken: (token: string) => set((prev) => ({ ...prev, token })),
}));
