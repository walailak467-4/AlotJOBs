function saveExperienceJOB() {

    var chkEx1 = document.getElementById("chkEx1");
    var chkEx2 = document.getElementById("chkEx2");
    var positionJOB = document.getElementById("positionJOB");
    var workplace = document.getElementById("workplace");
    var detailJOB = document.getElementById("detailJOB");
    var lengthYear = document.getElementById("lengthYear");
    var lengthMonth = document.getElementById("lengthMonth");
    var lengthDay = document.getElementById("lengthDay");

    if (chkEx1.checked == true) {
        insertData1(chkEx1.value, positionJOB.value, workplace.value, detailJOB.value, lengthYear.value, lengthMonth.value, lengthDay.value);
    } else if (chkEx2.checked == true) {
        insertData2(chkEx2.value);
    } else {
        console.log("Insert Failed");
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
function insertData1(chkEx1, positionJOB, workplace, detailJOB, lengthYear, lengthMonth, lengthDay) {
    var firebaseRef = firebase.database().ref('ExperienceJOB');
    firebaseRef.push({
        ประสบการณ์: chkEx1,
        ตำแหน่งงาน: positionJOB,
        สถานที่ทำงาน: workplace,
        รายละเอียดหน้าที่ที่ได้รับผิดชอบ: detailJOB,
        ระยะเวลาในการทำงาน: {
            ปี: lengthYear,
            เดือน: lengthMonth,
            วัน: lengthDay
        }
    });
    console.log("Insert มีประสบการณ์");
}
function insertData2(chkEx2) {
    var firebaseRef = firebase.database().ref('ExperienceJOB');
    firebaseRef.push({
        ประสบการณ์: chkEx2
    });
    console.log("Insert ไม่มีประสบการณ์");
}
