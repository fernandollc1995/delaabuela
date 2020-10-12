// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAD8zuH2p48OteBfJfbqprcEjfCavmmu4c",
    authDomain: "delaabuela-1c041.firebaseapp.com",
    databaseURL: "https://delaabuela-1c041.firebaseio.com",
    projectId: "delaabuela-1c041",
    storageBucket: "delaabuela-1c041.appspot.com",
    messagingSenderId: "864731685004",
    appId: "1:864731685004:web:e518c18ac6c865c89adba9",
    measurementId: "G-3RPYWWMQ2Z"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const fanalytics = firebase.analytics();
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth , provider};
export default db
// </script>