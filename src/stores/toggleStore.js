import { defineStore } from 'pinia';

export const useToggleStore = defineStore('toggle', {
  state: () => ({
    isSidePanelOpen: false,
  }),
  actions: {
    toggleSidePanel() {
      this.isSidePanelOpen = !this.isSidePanelOpen;
    },
  },
});

