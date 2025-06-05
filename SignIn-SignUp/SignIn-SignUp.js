import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAH22GhF_bZMSPVEA6H4mi8lBvMIx9N8Q0",
  authDomain: "final-solution-19783.firebaseapp.com",
  projectId: "final-solution-19783",
  storageBucket: "final-solution-19783.appspot.com",
  messagingSenderId: "498301747585",
  appId: "1:498301747585:web:541340a291b544ad646880",
  measurementId: "G-BQ1GKTG954"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Update UI
function updateUI(user) {
  const authForms = document.getElementById("auth-forms");
  const logoutSection = document.getElementById("logout-section");
  const status = document.getElementById("status");

  if (user) {
    authForms.classList.add("hidden");
    logoutSection.classList.remove("hidden");
    status.innerText = `✅ Logged in as ${user.email}`;
  } else {
    authForms.classList.remove("hidden");
    logoutSection.classList.add("hidden");
    status.innerText = "🔐 Please log in or sign up.";
  }
}

// Firebase: Monitor auth state
onAuthStateChanged(auth, (user) => {
  updateUI(user);
});

// Sign Up
window.signUp = function () {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateUI(userCredential.user);
    })
    .catch((error) => {
      document.getElementById("status").innerText = "❌ " + error.message;
    });
};

// Sign In
window.signIn = function () {
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateUI(userCredential.user);
    })
    .catch((error) => {
      document.getElementById("status").innerText = "❌ " + error.message;
    });
};

// Sign Out
window.signOutUser = function () {
  signOut(auth)
    .then(() => {
      updateUI(null);
    })
    .catch((error) => {
      document.getElementById("status").innerText = "❌ " + error.message;
    });
};

// Switch Forms
document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".signup-form").classList.add("hidden");
  document.querySelector(".login-form").classList.remove("hidden");
});

document.getElementById("signup-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".login-form").classList.add("hidden");
  document.querySelector(".signup-form").classList.remove("hidden");
});
