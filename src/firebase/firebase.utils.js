import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2pZm9PSs1cF-zqLDe0DjzRu-rXDVqRNE",
    authDomain: "golfassist-dc0d4.firebaseapp.com",
    databaseURL: "https://golfassist-dc0d4.firebaseio.com",
    projectId: "golfassist-dc0d4",
    storageBucket: "golfassist-dc0d4.appspot.com",
    messagingSenderId: "369222917320",
    appId: "1:369222917320:web:5d0126341533b8ee9c59fd",
    measurementId: "G-8MW839V2MG"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;