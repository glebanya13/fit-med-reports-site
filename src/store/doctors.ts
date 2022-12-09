import { defineStore } from 'pinia'
import axios from 'axios'

const arr: any[] = [];

export const useDoctorsStore = defineStore('doctors', {
  state: () => ({
    doctors: arr
  }),
  getters: {
    showDoctors(state) {
      return state.doctors
    },
  },
  actions: {
    async get_doctors() {
      await axios.get("")
        .then((res) => {
          this.doctors.push(res.data);
        })
    },
  },
})
