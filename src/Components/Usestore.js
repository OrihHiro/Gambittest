import { create } from "zustand";

export const useStore = create((set) => ({
  cryptoe: [],
  setCryptoe: (newCryptoe) => set({ cryptoe: newCryptoe }),
  updateCryptoe: (id, newData) =>
    set((state) => ({
      cryptoe: state.cryptoe.map((crypto) =>
        crypto.id === id ? { ...crypto, ...newData } : crypto
      ),
    })),
  removeCryptoe: (idToRemove) =>
    set((state) => ({
      cryptoe: state.cryptoe.filter((crypto) => crypto.id !== idToRemove),
    })),
}));
