/* Vikku Ponnaganti - Author of this file from Lines 3 - 23, any changes within
these lines authored by someone else will be stated otherwise */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/main.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA_rIqtctF89g_ZFXD616e_zDfRlWkLyc",
  authDomain: "gamerfit-29ec9.firebaseapp.com",
  databaseURL: "https://gamerfit-29ec9-default-rtdb.firebaseio.com",
  projectId: "gamerfit-29ec9",
  storageBucket: "gamerfit-29ec9.appspot.com",
  messagingSenderId: "420622471418",
  appId: "1:420622471418:web:705c8f20154cbfe67cb943",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

createApp(App).use(router).mount("#app");
