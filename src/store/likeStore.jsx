import { create } from "zustand";

const useLikeStore = create((set) => ({
  likedItems: JSON.parse(localStorage.getItem("likedItems")) || [],

  toggleLike: (item) =>
    set((state) => {
      let updatedItems;
      const exists = state.likedItems.find((i) => i.id === item.id);

      if (exists) {
        updatedItems = state.likedItems.filter((i) => i.id !== item.id);
      } else {
        updatedItems = [...state.likedItems, item];
      }

      localStorage.setItem("likedItems", JSON.stringify(updatedItems));
      return { likedItems: updatedItems };
    }),
}));
export default useLikeStore;
