import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDmqWbrVwfV5Z_Ozv1y6PwaajYyG7eYmv0",
    authDomain: "gyno-3075.firebaseapp.com",
    projectId: "gyno-3075",
    storageBucket: "gyno-3075.appspot.com",
    messagingSenderId: "486630156308",
    appId: "1:486630156308:web:e7dbac631f61540e7edf01",
    measurementId: "G-G6N437DM6W"

});

var db = firebaseApp.firestore();
var storage = firebase.storage();
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export {db, storage, auth, provider};