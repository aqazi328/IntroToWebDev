var contact_info = document.forms["contact-info"];  // get all vars by id from html file 
var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var reasonInq = document.getElementById("reasonInq");
var info = document.getElementById("info");
var been = document.getElementById("been");
var day = document.getElementById("day");
var submitButton = document.getElementById("submitButton");

function validate(){
    if (!numberFun.checkValidity()) {
        numberFun.className = "was-validated";
        return false;
    }

    return false;
}