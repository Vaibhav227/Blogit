let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyDh70o2fglH3288Hg_O0JtlIN-OJqpThXo",
    authDomain: "blogit-eea26.firebaseapp.com",
    projectId: "blogit-eea26",
    storageBucket: "blogit-eea26.appspot.com",
    messagingSenderId: "1013822291778",
    appId: "1:1013822291778:web:92344810f45bee9fd8d2db"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
