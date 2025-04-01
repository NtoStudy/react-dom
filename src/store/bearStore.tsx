import {create} from "zustand/react";

type BearState = {
  bears: number;
  increase: () => void;
  decrease: () => void;
};

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: () => set((state) => ({
    bears: state.bears + 1
  })),

  decrease: () => set((state) => ({
    bears: state.bears - 1
  }))
}))



