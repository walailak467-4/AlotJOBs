function saveYourSkill() {
    var skill = document.getElementsByClassName("vehicle");
    // var skill = document.querySelector('.vehicle:checked');

    for (i = 0; i < skill.length; i++) {
        if (skill[i].checked === true) {
            insertData(skill[i].value);
        }
    }
    //    console.log(skill[i]);


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

function insertData(skill) {
    var firebaseRef = firebase.database().ref('YourSkill');

    firebaseRef.push({
        ทักษะ:skill
    });
    console.log("Insert ทักษะของคุณ");

}
