function saveOnClick(){
    var imgPro = document.getElementById("imgPro");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var nname = document.getElementById("nname");
    var gender = document.getElementById("gender");
    var birthdate = document.getElementById("birthdate");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    //console.log(imgPro.value,fname.value,lname.value,nname.value,gender.value,birthdate.value,phone.value,email.value);
    insertData(imgPro.value,fname.value,lname.value,nname.value,gender.value,birthdate.value,phone.value,email.value)
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
function insertData(imgPro,fname,lname,nname,gender,birthdate,phone,email){
    var firebaseRef = firebase.database().ref("User");
    firebaseRef.push({
        imgPro:imgPro,
        fname:fname,
        lname:lname,
        nname:nname,
        gender:gender,
        birthdate:birthdate,
        phone:phone,
        email:email
    });
    console.log("Insert Success");

}