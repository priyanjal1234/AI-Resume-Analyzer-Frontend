import { initializeApp } from "firebase/app";

import conf from "../../config/conf.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEbhql9bZ8-chietLxlBvSn5b10In0hFM",
  authDomain: "ai-resume-analyzer-3e0cf.firebaseapp.com",
  projectId: "ai-resume-analyzer-3e0cf",
  storageBucket: "ai-resume-analyzer-3e0cf.firebasestorage.app",
  messagingSenderId: "133773005717",
  appId: "1:133773005717:web:d961bc25622d06fc419c9c",
  measurementId: "G-1TL7KCJ7HF",
};

const app = initializeApp(firebaseConfig);

export default app
