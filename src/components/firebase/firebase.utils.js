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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get();
    // console.log('we got it')

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        // console.log('######')
        try{
            await userRef.set({
                displayName: displayName,
                email: email,
                createdAt: createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}


export const addCollectionDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newObjRef = collectionRef.doc();
        batch.set(newObjRef, obj)
    })

    return await batch.commit()
}



export const bringingShopDataToOurApp = (collection) => {
    const transformedCollection = collection.docs.map( doc => {
        const {title, items} = doc.data();

        return {
            routeName : encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items 
        }
    } )

    return transformedCollection.reduce((accumulator, item) => {
        accumulator[item.title.toLowerCase()] = item;
        return accumulator
    }, {})
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;