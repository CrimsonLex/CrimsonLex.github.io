import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, increment, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9fE3Izyd0YsmMG9ArFUuqAtIZsYQzPJQ",
  authDomain: "planify-93ca2.firebaseapp.com",
  projectId: "planify-93ca2",
  storageBucket: "planify-93ca2.appspot.com",
  messagingSenderId: "353057198767",
  appId: "1:353057198767:web:3f28e6c95a604537e33a5a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const btn = document.getElementById("counter");
const counterRef = doc(db, "statics", "counterDoc")

await setDoc(doc(db, "statics", "Nothing"), {
  name: "to stablish conection"
});

btn.addEventListener("click", async () => {
    console.log('entra')
    await updateDoc(counterRef, {
      counter: increment(1)
    })
});
