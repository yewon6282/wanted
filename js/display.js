function onDisplay(idMyDiv) {
  var objDis = document.getElementById(idMyDiv);

  objDis.style.display = "block";
}

function offDisplay(idMyDiv) {
  var objDis = document.getElementById(idMyDiv);
  
  objDis.style.display = "none";
}

function loginOffDisplay(idMyDiv) {
  var signupObjDis = document.getElementById(idMyDiv);
  var emailValue = document.getElementById("email");
  var emailCheck = document.getElementById("emailCheck");
  
  signupObjDis.style.display = "none";
  emailValue.value = "";
  emailValue.style.border = "1px solid #e1e2e3";
  emailCheck.innerHTML = "";
}

function gotosignup() {
  document.getElementById("login-popup-background").style.display = "none";
  document.getElementById("signup-popup-background").style.display = "block";
}

function signupOffDisplay(idMyDiv) {
  var signupObjDis = document.getElementById(idMyDiv);
  var nameValue = document.getElementById("name");
  var nameCheck = document.getElementById("nameCheck");
  var numberValue = document.getElementById("number");
  var certificationNumberValue = document.getElementById("certificationNumber");
  var numberCheck = document.getElementById("numberCheck");
  var passwordValue = document.getElementById("password");
  var passwordCheck = document.getElementById("passwordCheck");
  var checkPasswordValue = document.getElementById("checkPassword");
  var passwordDoubleCheck = document.getElementById("passwordDoubleCheck");
  
  signupObjDis.style.display = "none";

  nameValue.value = "";
  nameValue.style.border = "1px solid #e1e2e3";
  nameCheck.innerHTML = "";

  numberValue.value = "";
  numberValue.style.border = "1px solid #e1e2e3";
  certificationNumberValue.value = "";
  certificationNumberValue.style.border = "1px solid #e1e2e3";
  numberCheck.innerHTML = "";

  passwordValue.value = "";
  passwordValue.style.border = "1px solid #e1e2e3";
  passwordCheck.innerHTML = "";

  checkPasswordValue.value = "";
  checkPasswordValue.style.border = "1px solid #e1e2e3";
  passwordDoubleCheck.innerHTML = "";
}