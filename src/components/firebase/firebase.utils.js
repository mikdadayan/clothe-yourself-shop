import firebase from "firebase";
import 'firebase/auth';
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCVvllFC6TnuuLBGPv3lL7It9jNDHpoF_c",
    authDomain: "crwn-db-8b69f.firebaseapp.com",
    databaseURL: "https://crwn-db-8b69f.firebaseio.com",
    projectId: "crwn-db-8b69f",
    storageBucket: "crwn-db-8b69f.appspot.com",
    messagingSenderId: "696401067849",
    appId: "1:696401067849:web:adfa3d404da6da9bd6e498",
    measurementId: "G-Z2XHS29LM4"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;