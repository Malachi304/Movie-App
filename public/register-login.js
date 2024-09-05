const LogInButton = document.getElementById("LogInButton");
const SignUpButton = document.getElementById("SignUpButton");
const LogInForm = document.getElementById("login-form");
const SignUpForm = document.getElementById("register-form");

SignUpButton.addEventListener('click',function(){
    LogInForm.style.display='none';
    SignUpForm.style.display='block';
})

LogInButton.addEventListener('click',function(){
    LogInForm.style.display='block';
    SignUpForm.style.display='none'; 
})