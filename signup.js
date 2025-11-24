// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnBQdizEoe6Ynps14ekye-08VuID5CHH4",
  authDomain: "campusmart-3c06d.firebaseapp.com",
  projectId: "campusmart-3c06d",
  storageBucket: "campusmart-3c06d.firebasestorage.app",
  messagingSenderId: "101996365967",
  appId: "1:101996365967:web:7db20e847dc9d9a7f488fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



// Submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  

  // Check if email contains 'ssjcet'
  if (!email.includes("ssjcet")) {
    alert("Only ssjcet college email addresses are allowed to register.");
    return;
  }

  // Proceed to create user if email is valid
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Account created successfully!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });

});
