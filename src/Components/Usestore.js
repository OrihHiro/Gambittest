import { create } from "zustand";

export const useStore = create((set) => ({
  crypto: [],
  loading: false,
  error: null,
  setCrypto: (newCrypto) => set({ crypto: newCrypto }),
  updateCrypto: (id, newData) =>
    set((state) => ({
      crypto: state.crypto.map((crypto) =>
        crypto.id === id ? { ...crypto, ...newData } : crypto
      ),
    })),
  removeCrypto: (idToRemove) =>
    set((state) => ({
      crypto: state.crypto.filter((crypto) => crypto.id !== idToRemove),
    })),
  setLoading: (isLoading) => set({ loading: isLoading }),
  setError: (errorMessage) => set({ error: errorMessage }),
}));
