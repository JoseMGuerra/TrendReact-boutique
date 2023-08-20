import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwcbMp4mo4PJVD6xwjfVYM7p2Q23z4XyU",
  authDomain: "trendreact-boutique.firebaseapp.com",
  projectId: "trendreact-boutique",
  storageBucket: "trendreact-boutique.appspot.com",
  messagingSenderId: "786989231953",
  appId: "1:786989231953:web:760ae07efd531779e1ad70",
};

const firebaseApp = initializeApp(firebaseConfig); // Initialize Firebase

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(); // Initialize Firebase Authentication and get a reference to the service
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
