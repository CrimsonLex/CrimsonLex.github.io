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

const btn = document.getElementById("interestedBtn");
const form = document.getElementById("formUser");

// await setDoc(doc(db, "users", "test"), {
//   name: "test",
//   email: "test",
//   age: "test",
//   city: "test"
// });

btn.addEventListener("onClick", async () => {
    console.log("name"+form.elements["name"].value)
    // const userRef = doc(db, "users", "counterDoc")
    // await updateDoc(counterRef, {
    //   counter: increment(1)
    // })
});
