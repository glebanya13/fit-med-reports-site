import { defineStore } from 'pinia'
import axios from 'axios'

const arr: any[] = [];

export const useTestsStore = defineStore('tests', {
  state: () => ({
    tests: arr
  }),
  getters: {
    showTests(state) {
      return state.tests
    },
  },
  actions: {
    async get_tests() {
      await axios.get("")
        .then((res) => {
          this.tests.push(res.data);
        })
    },
  },
})
