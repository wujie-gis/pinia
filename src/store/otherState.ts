// otherState.js
import { defineStore } from "pinia";

export const otherState = defineStore({
  id: "otherState",
  state: () => ({
    count: 5,
  }),
});
