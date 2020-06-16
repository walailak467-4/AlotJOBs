var firebaseConfig = {
    apiKey: "AIzaSyBXtA2h5hlz600klyOHDW61qcinVIlX5xI",
    authDomain: "alotjobs-5f2c3.firebaseapp.com",
    databaseURL: "https://alotjobs-5f2c3.firebaseio.com",
    projectId: "alotjobs-5f2c3",
    storageBucket: "alotjobs-5f2c3.appspot.com",
    messagingSenderId: "980309555700",
    appId: "1:980309555700:web:0195af85e20f64d0b521a1",
    measurementId: "G-4MJ7J6DF26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


var toggleSignIn = document.getElementById("toggleSignIn");

toggleSignIn.addEventListener("click", function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    var displayName = user.displayName;
                    var email = user.email;
                    var emailVerified = user.emailVerified;
                    var photoURL = user.photoURL;
                    var isAnonymous = user.isAnonymous;
                    var uid = user.uid;
                    var providerData = user.providerData;
                    if (!emailVerified) {
                        alert("Please verify your email!!")
                    } else {
                        alert("congrates Login successfully!!");
                        window.location = "test.html";
                    }
                }
            })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // [START_EXCLUDE]
                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                    // [END_EXCLUDE]
                });
        })
    })
