 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAnBQdizEoe6Ynps14ekye-08VuID5CHH4",
    authDomain: "campusmart-3c06d.firebaseapp.com",
    databaseURL: "https://campusmart-3c06d-default-rtdb.firebaseio.com",
    projectId: "campusmart-3c06d",
    storageBucket: "campusmart-3c06d.firebasestorage.app",
    messagingSenderId: "101996365967",
    appId: "1:101996365967:web:7db20e847dc9d9a7f488fa"
};
firebase.initializeApp(firebaseConfig);

var rollV, nameV, genderV, addressV;

function readForm() {
    rollV = document.getElementById("roll").value;
    nameV = document.getElementById("name").value;
    genderV = document.getElementById("gender").value;
    addressV = document.getElementById("address").value;
    console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
    readForm();

    firebase
        .database()
        .ref("student/" + rollV)
        .set({
            rollNo: rollV,
            name: nameV,
            gender: genderV,
            address: addressV,
        });

    alert("Data Inserted");
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
};

document.getElementById("read").onclick = function () {
    readForm();

    firebase
        .database()
        .ref("student/" + rollV)
        .on("value", function (snap) {
            document.getElementById("roll").value = snap.val().rollNo;
            document.getElementById("name").value = snap.val().name;
            document.getElementById("gender").value = snap.val().gender;
            document.getElementById("address").value = snap.val().address;

        });
};

document.getElementById("update").onclick = function () {
    readForm();

    firebase
        .database()
        .ref("student/" + rollV)
        .update({
            //  rollNo: rollV,
            name: nameV,
            gender: genderV,
            address: addressV,
        });
    alert("Data Update");
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
};

document.getElementById("delete").onclick = function() {
    readForm();

    firebase
        .database()
        .ref("student/" + rollV)
        .remove();
    alert("Data Deleted");
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
};