var pass1 = false;
var pass2 = false;
var first = false;
var last = false;
var email = false;
function passwords() {
    var val1 = document.getElementById("password").value;
    var val2 = document.getElementById("passwordConf").value;

    if ((val1 && val2) && (!(val1 === val2) || val1.length < 8 || val2.length < 8)) {
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("password").style.boxShadow = "none";
        document.getElementById("passwordConf").style.border = "2px solid red";
        document.getElementById("passwordConf").style.boxShadow = "none";
        pass1 = false;
        pass2 = false;
    } else if (val1.length >= 8 && (val1 === val2)) {
        document.getElementById("password").style.border = "";
        document.getElementById("password").style.boxShadow = "";
        document.getElementById("passwordConf").style.border = "";
        document.getElementById("passwordConf").style.boxShadow = "";
        pass1 = true;
        pass2 = true;
    } else {
        document.getElementById("password").style.border = "";
        document.getElementById("password").style.boxShadow = "";
        document.getElementById("passwordConf").style.border = "";
        document.getElementById("passwordConf").style.boxShadow = "";
        pass1 = false;
        pass2 = false;
    }
}
function checkForm() {
    if (document.getElementById("first").value) {
        first = true;
        firstVal = document.getElementById("first").value;
    } else {
        first = false;
    }

    if (document.getElementById("last").value) {
        last = true;
        lastVal = document.getElementById("last").value;
    } else {
        last = false;
    }

    if (document.getElementById("email").value) {
        email = true;
        emailVal = document.getElementById("email").value;
    } else {
        email = false;
    }

    if (pass1 && pass2 && first && last && email) {
        document.getElementById('submitButton').disabled = false;
        document.getElementById('submitButton').className = "btn float-left btn-success";
        var collection = {firstName: firstVal, lastName: lastVal, email: emailVal, password: document.getElementById("password").value};
        collection = JSON.stringify(collection);
        document.getElementById("submission").value = collection;


    } else {
        document.getElementById('submitButton').disabled = true;
        document.getElementById('submitButton').className = "btn float-left";
    }
}