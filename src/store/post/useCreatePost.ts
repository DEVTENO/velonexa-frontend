import { create } from "zustand";

interface ImageStoreState {
  imageUrl: string | null;
  setImageUrl: (url: string | null) => void;
}

const useCreatePost = create<ImageStoreState>((set) => ({
  imageUrl: null,
  setImageUrl: (url) => set({ imageUrl: url }),
}));

export default useCreatePost;
