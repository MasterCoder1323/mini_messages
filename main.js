// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJUZeFgz86pbcJSyAg01le-Ll5TATFWbQ",
  authDomain: "messaging-3e144.firebaseapp.com",
  databaseURL: "https://messaging-3e144-default-rtdb.firebaseio.com",
  projectId: "messaging-3e144",
  storageBucket: "messaging-3e144.appspot.com",
  messagingSenderId: "1067401953961",
  appId: "1:1067401953961:web:cca14542d6e7697df19fb8",
  measurementId: "G-JFW1T0KYQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//Firebase Functions
function getDBValue(key) {
	let value = get(child(dbRef, key)).then((snapshot) => {
		if (snapshot.exists()) {
		  console.log(snapshot.val());
		} else {
		  console.log("No data available");
		}
	}).catch((error) => {console.error(error);});
	return value;
}

function writeDBValue(folder, json) {
	set(ref(db, folder), json);
}

//Login
function addUser() {
	let userName = document.getElementById("username").value;
	let userPassword = document.getElementById("password").value;
	if (getDBValue('users/' + userName)) {
		if (getDBValue('users/' + userName + '/password') == userPassword) {
			localStorage.setItem("user", userName);
			window.location = "index.html";
		}
	} else {
		writeDBValue("users" + userName , {
			password: userPassword,
			rooms: null
		});
		localStorage.setItem("user", userName);
		window.location = "index.html";
	}
}
