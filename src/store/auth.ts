import { defineStore } from 'pinia'
import router from '@/router'
// import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    register(name: any, password: any) {
      console.log(name);
      console.log(password);

      // axios.post("", {
      //   name: name,
      //   password: password
      // })
      // .then(() => {
      router.push("/");
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
    },
  },
})
