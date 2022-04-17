import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4EAZ4cX5Mk4QD8GHnXEr61FCDf22lnH4",
  authDomain: "test-1fd34.firebaseapp.com",
  projectId: "test-1fd34",
  storageBucket: "test-1fd34.appspot.com",
  messagingSenderId: "253116228208",
  appId: "1:253116228208:web:940a5598dc721d2d3b0ab5",
  measurementId: "G-7C0PHQD424",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

(async () => {
  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Alan",
  //     middle: "Mathison",
  //     last: "Turing",
  //     born: 1912,
  //   });

  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>${doc.data()}`);
  });
})();
