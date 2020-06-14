function saveEducationLevel(){
    var level = document.getElementById("level");
    var placeStudy = document.getElementById("placeStudy");
    var facultyMajor = document.getElementById("facultyMajor");
    insertData(level.value,placeStudy.value,facultyMajor.value)
}
window.onload=function(){
    showData();
}
function showData(){
    var firebaseRef = firebase.database().ref("User");
    firebaseRef.once('value').then(function(dataSnapshot){
        console.log(dataSnapshot.val());
    });
}
function insertData(level,placeStudy,facultyMajor){
    var firebaseRef = firebase.database().ref("StudyPlace");
    firebaseRef.push({
        สถานศึกษา:level,
        ชื่อ:placeStudy,
        สาขาวิชา:facultyMajor
    });
    console.log("Insert Success");

}