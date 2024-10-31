import { UserProfile } from "@/lib/types/types";
import { create } from "zustand";

// interface HistoryState {
//   historys: UserProfile[];
//   setHistorys: (newHistory: UserProfile) => void;
//   delete: (username: string) => void;

// }

const useHistoryStore =
  create <
  HistoryState >
  ((set) => ({
    historys:
      typeof window !== "undefined" && localStorage.getItem("history")
        ? JSON.parse(localStorage.getItem("history") || "[]")
        : [],
    setHistorys: (newHistory) =>
      set((state) => {
        const updatedHistory = [...state.historys, newHistory];
        if (typeof window !== "undefined") {
          localStorage.setItem("history", JSON.stringify(updatedHistory));
        }
        return { historys: updatedHistory };
      }),
    delete: (username) =>
      set((state) => {
        const historySlice = state.historys.slice();
        const deleteHistory = historySlice.filter(
          (item) => item.username !== username
        );
        state.setHistorys(deleteHistory);
      }),
  }));

export default useHistoryStore;
