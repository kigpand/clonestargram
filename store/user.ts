import { IUser } from "./../interface/IUser";
import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface IUserStore {
  user: IUser | null;
  setUser: (info: any) => void;
}

const useUser = create<IUserStore>((set) => ({
  user: null,
  setUser: (info: any) => set({ user: info }),
}));

export default useUser;
