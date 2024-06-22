import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('useAppStore', () => {
  const check = ref(null)

  return { check }
})
