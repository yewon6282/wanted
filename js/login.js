function loginCheck() {
  // event.defaultPrevented();

  var emailValue = document.getElementById("email");
  var emailCheck = document.getElementById("emailCheck");
  var email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (emailValue.value == "" || !email.test(emailValue.value)) {
    emailValue.style.border = "1px solid #fe415c";
    emailCheck.innerHTML = "올바른 이메일 형식을 입력해주세요.";
    emailCheck.style.color = "#fe415c";
    return false;
  } else {
    emailValue.style.border = "1px solid #e1e2e3";
    emailCheck.innerHTML = "";
  }

  emailValue.onsubmit;
}
