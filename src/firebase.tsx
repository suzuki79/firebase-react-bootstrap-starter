import * as fb from "firebase";

export const firebase = fb.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
});



export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const EmailAuthProvider = fb.auth.EmailAuthProvider;
