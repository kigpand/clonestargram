import create from "zustand";

interface IUser {
  user: any;
  setUser: (info: any) => void;
}

const useUser = create<IUser>((set) => ({
  user: null,
  setUser: (info: any) => set({ user: info }),
}));

export default useUser;
