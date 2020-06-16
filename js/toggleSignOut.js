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


var toggleSignOut = document.getElementById("toggleSignOut");

toggleSignOut.addEventListener("click", function (event) {
    event.preventDefault();


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
            document.getElementById('toggleSignOut').textContent = 'Log out';
            if (firebase.auth().currentUser) {
                // [START signout]
                firebase.auth().signOut();
                // [END signout]
            }
        } else {
            // User is signed out.
            // [START_EXCLUDE]
            document.getElementById('toggleSignOut').textContent = 'Log in';

            // [END_EXCLUDE]
        }

    })


})