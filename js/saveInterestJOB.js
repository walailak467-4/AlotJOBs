function saveInterestJOB() {
    var  interestJOB= document.getElementsByClassName("myCheckbox");

    for (i = 0; i < interestJOB.length; i++) {
        if (interestJOB[i].checked === true) {
            insertData(interestJOB[i].value);
        }
    }
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

function insertData(interestJOB) {
    var firebaseRef = firebase.database().ref('InterestJOB');

    firebaseRef.push({
        ประเภทงานที่สนใจ:interestJOB
    });
    console.log("Insert ทักษะของคุณ");

}
