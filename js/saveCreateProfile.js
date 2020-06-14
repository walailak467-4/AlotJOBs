function saveCreateProfile(){
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
        รูปโปรไฟล์:imgPro,
        ชื่อ:fname,
        นามสกุล:lname,
        ชื่อเล่น:nname,
        เพศ:gender,
        วันเกิด:birthdate,
        เบอร์โทรศัพท์:phone,
        อีเมล:email
    });
    console.log("Insert Success");

}