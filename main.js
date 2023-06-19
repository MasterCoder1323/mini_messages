// Firebase Setup
const jFirebase = require("https://cdn.skypack.dev/jlsfirebase");
const jConf = {
	apiKey: "AIzaSyCJUZeFgz86pbcJSyAg01le-Ll5TATFWbQ",
	authDomain: "messaging-3e144.firebaseapp.com",
	databaseURL: "https://messaging-3e144-default-rtdb.firebaseio.com",
	projectId: "messaging-3e144",
	storageBucket: "messaging-3e144.appspot.com",
	messagingSenderId: "1067401953961",
	appId: "1:1067401953961:web:cca14542d6e7697df19fb8",
	measurementId: "G-JFW1T0KYQ8"
};
var init = jFirebase.init(jConf);
//Login
function addUser() {
	let userName = document.getElementById("username").value;
	let userPassword = document.getElementById("password").value;
	if (jFirebase.get(init, 'users/' + userName) != null) {
		if (jFirebase.get(init, 'users/' + userName + '/password') == userPassword) {
			localStorage.setItem("user", userName);
			window.location = "index.html";
		}
	} else {
		jFirebase.write(init, "users" + userName , {
			password: userPassword,
			rooms: null
		});
		localStorage.setItem("user", userName);
		window.location = "index.html";
	}
}
