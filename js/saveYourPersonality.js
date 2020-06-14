function saveYourPersonality() {
    var personality = document.getElementsByClassName("vehicle");
    // var personality = document.querySelector('.vehicle:checked');

    for (i = 0; i < personality.length; i++) {
        if (personality[i].checked === true) {
            insertData(personality[i].value);
        }
    }
    //    console.log(personality[i]);


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

function insertData(personality) {
    var firebaseRef = firebase.database().ref('YourPersonality');

    firebaseRef.push({
        บุคลิกภาพ:personality
    });
    console.log("Insert บุคลิกภาพของคุณ");

}
