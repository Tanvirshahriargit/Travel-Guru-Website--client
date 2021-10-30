const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// const firebaseConfig = {
//     apiKey: "AIzaSyCjGs3mcbkUqpEuJVdjoeGZ2p1W6Tx4tkE",
//     authDomain: "travel-guru-3a31a.firebaseapp.com",
//     projectId: "travel-guru-3a31a",
//     storageBucket: "travel-guru-3a31a.appspot.com",
//     messagingSenderId: "371862765997",
//     appId: "1:371862765997:web:6beed992981d315419e124"
//   };

export default firebaseConfig;