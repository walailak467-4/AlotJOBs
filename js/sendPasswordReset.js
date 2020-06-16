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

var resetPassword = document.getElementById("resetPassword");

resetPassword.addEventListener("click", function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function () {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        window.location = "login.html"
        // [END_EXCLUDE]
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
})