import { create } from "zustand";

export const useStore = create((set) => ({
  cryptoe: [],
  loading: false,
  error: null,
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
  setLoading: (isLoading) => set({ loading: isLoading }),
  setError: (errorMessage) => set({ error: errorMessage }),
}));
