import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCpsF926GaSPxp7RQaXdGDsUWsuglEPuy0",
    authDomain: "app-doacao-solidaria.firebaseapp.com",
    projectId: "app-doacao-solidaria",
    databaseURL: '',
    storageBucket: "app-doacao-solidaria.firebasestorage.app",
    messagingSenderId: "947170019586",
    appId: "1:947170019586:web:a7319188d6ec23b8031a1b",
    measurementId: "G-D8G9K08RQX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;