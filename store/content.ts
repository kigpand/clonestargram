import create from "zustand";

interface IContentStore {
  currentContent: any;
  setCurrentContent: (item: any) => void;
  clearCurrentContent: () => void;
}

const useContent = create<IContentStore>((set) => ({
  currentContent: null,
  setCurrentContent: (item: any) => set({ currentContent: item }),
  clearCurrentContent: () => set({ currentContent: null }),
}));

export default useContent;
