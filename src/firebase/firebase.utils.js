import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyACqrGBLp9XrCMaCng0e3YAcqFjNma-iKQ",
  authDomain: "clothing-db-4241a.firebaseapp.com",
  databaseURL: "https://clothing-db-4241a.firebaseio.com",
  projectId: "clothing-db-4241a",
  storageBucket: "clothing-db-4241a.appspot.com",
  messagingSenderId: "443385918277",
  appId: "1:443385918277:web:312adde6706f6d399ac42c"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
 

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
