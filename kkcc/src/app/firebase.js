// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCikNXQGJoM6OVc1fD84NI6HhWHO70PdYY",
  authDomain: "the-kkc-classroom.firebaseapp.com",
  projectId: "the-kkc-classroom",
  storageBucket: "the-kkc-classroom.firebasestorage.app",
  messagingSenderId: "338843540783",
  appId: "1:338843540783:web:30336472d3fcfc249615da",
  measurementId: "G-CN9FFP7G29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };