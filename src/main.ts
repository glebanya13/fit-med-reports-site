import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_Fbz3Djuw5emHD-14KRTrNzlvBy1AZVk",
  authDomain: "fit-med-reports-site.firebaseapp.com",
  projectId: "fit-med-reports-site",
  storageBucket: "fit-med-reports-site.appspot.com",
  messagingSenderId: "493208619108",
  appId: "1:493208619108:web:68e4e0f5ef739525763771"
};

initializeApp(firebaseConfig);

createApp(App).use(createPinia()).use(router).mount('#app')
