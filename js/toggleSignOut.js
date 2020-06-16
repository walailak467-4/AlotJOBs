

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
            if (firebase.auth().currentUser) {
                // [START signout]
                document.getElementById('toggleSignOut').textContent = 'Log out';
                document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
                document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
                firebase.auth().signOut();
                // [END signout]
            } else {
                // User is signed out.
                // [START_EXCLUDE]
                document.getElementById('toggleSignOut').textContent = 'Log in';
                document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
                document.getElementById('quickstart-account-details').textContent = 'null';
                window.location = "login.html";
                // [END_EXCLUDE]

            }
        }
    })
})