// var firebaseConfig = {
//     apiKey: "AIzaSyBXtA2h5hlz600klyOHDW61qcinVIlX5xI",
//     authDomain: "alotjobs-5f2c3.firebaseapp.com",
//     databaseURL: "https://alotjobs-5f2c3.firebaseio.com",
//     projectId: "alotjobs-5f2c3",
//     storageBucket: "alotjobs-5f2c3.appspot.com",
//     messagingSenderId: "980309555700",
//     appId: "1:980309555700:web:0195af85e20f64d0b521a1",
//     measurementId: "G-4MJ7J6DF26"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();


var facebookLogIn = document.getElementById("facebookLogIn");

facebookLogIn.addEventListener("click", function (event) {
    event.preventDefault();
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().useDeviceLanguage();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...

        alert('SUCCESS!!')
        console.log('token is ' + token)
        console.log('user is ' + user)
        window.location.href = "index.html"
        // var logout = window.location.href = "index.html"
        // var logout_textchenge = logout.document.getElementById("login-nav")
        // logout_textchenge.querySelector('a').textContent = 'LOG OUT'

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        console.log(errorCode)
        console.log(errorMessage)
    });
})