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




/**
 * Handles the sign up button press.
 */
var handleSignUp = document.getElementById("handleSignUp");

handleSignUp.addEventListener("click", function (event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function () {
                // [START sendemailverification]
                firebase.auth().currentUser.sendEmailVerification().then(function () {
                    // Email Verification sent!
                    // [START_EXCLUDE]
                    alert('Email Verification Sent!');
                    // [END_EXCLUDE]
                });
                // [END sendemailverification]

                alert("congrates Sign Up successfully!!")
                window.location = "login.html"
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
    }
    console.log(email)
    console.log(password)
})