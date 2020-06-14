function saveImageVideoLink() {
    var fileUp = document.getElementById("fileUp");

    // for (i = 0; i < skill.length; i++) {
    //     if (skill[i].checked === true) {
    //         insertData(skill[i].value);
    //     }
    // }
    //    console.log(skill[i]);
    insertData(fileUp.value);

}

window.onload = function () {
    showData();
}

function showData() {
    var firebaseRef = firebase.database().ref();
    firebaseRef.once('value').then(function (dataSnapshot) {
        console.log(dataSnapshot.val());
    });
}

function insertData(fileUp) {
    var firebaseRef = firebase.database().ref('ImageVideoLink');

    firebaseRef.push({
        รูปภาพหรือผลงาน:fileUp
    });
    console.log("Insert รูปภาพหรือผลงาน");

}
