import create from "zustand";

interface IData {
  isMobile: boolean;
  searchTag: string;
  loading: boolean;
  setMobile: (isMobile: boolean) => void;
  setSearchTag: (text: string) => void;
  setLoading: (flag: boolean) => void;
}

const useData = create<IData>((set) => ({
  isMobile: false,
  searchTag: "",
  loading: false,
  setMobile: (isMobile: boolean) => set({ isMobile }),
  setSearchTag: (text: string) => set({ searchTag: text }),
  setLoading: (flag: boolean) => set({ loading: flag }),
}));

export default useData;
