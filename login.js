// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAnBQdizEoe6Ynps14ekye-08VuID5CHH4",
  authDomain: "campusmart-3c06d.firebaseapp.com",
  projectId: "campusmart-3c06d",
  storageBucket: "campusmart-3c06d.appspot.com",
  messagingSenderId: "101996365967",
  appId: "1:101996365967:web:7db20e847dc9d9a7f488fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Submit button click handler
const submit = document.getElementById('submit');
if (submit) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email contains 'ssjcet'
    if (!email.includes("ssjcet")) {
      alert("Only ssjcet college email addresses are allowed to login.");
      return;
    }

    // Sign in using Firebase Auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("isLoggedIn", "true");
        alert("Logging in...");
        window.location.href = "home.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}



