import create from "zustand";
import { IPost } from "../interface/IPost";

interface IContentStore {
  currentContent: IPost | null;
  setCurrentContent: (item: any) => void;
  clearCurrentContent: () => void;
}

const useContent = create<IContentStore>((set) => ({
  currentContent: null,
  setCurrentContent: (item: any) => set({ currentContent: item }),
  clearCurrentContent: () => set({ currentContent: null }),
}));

export default useContent;
