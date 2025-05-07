import { defineStore } from "pinia";

export const useDarkStore = defineStore("dark", {
  state: () => ({
    isDark: false,
  }),

  actions: {
    toggle() {
      this.isDark = !this.isDark;
      document.documentElement.classList.toggle("dark", this.isDark);
    },
    init() {
      this.isDark = document.documentElement.classList.contains("dark");
    },
  },
});
