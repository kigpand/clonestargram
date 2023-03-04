import create from "zustand";

interface IData {
  isMobile: boolean;
  setMobile: (isMobile: boolean) => void;
}

const useData = create<IData>((set) => ({
  isMobile: false,
  setMobile: (isMobile: boolean) => set({ isMobile }),
}));

export default useData;
