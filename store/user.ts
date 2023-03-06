import { IUser } from "./../interface/IUser";
import create from "zustand";

interface IUserStore {
  user: IUser | null;
  setUser: (info: any) => void;
}

const useUser = create<IUserStore>((set) => ({
  user: null,
  setUser: (info: any) => set({ user: info }),
}));

export default useUser;
