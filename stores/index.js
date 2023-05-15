import { defineStore } from "pinia";
import { ref } from "vue";
export const useNotesStore = defineStore("NotesStore", () => {
  
  const a = ref("qwerty");
  return { a };
});
