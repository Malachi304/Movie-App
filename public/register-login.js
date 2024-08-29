const SignInButton = document.getElementById("SignInButton");
const SignUpButton = document.getElementById("SignUpButton");
const SignInForm = document.getElementById("login-form");
const SignUpForm = document.getElementById("register-form");

SignUpButton.addEventListener('click',function(){
    SignInForm.style.display='none';
    SignUpForm.style.display='block';
})

SignInButton.addEventListener('click',function(){
    SignInForm.style.display='block';
    SignUpForm.style.display='none'; 
})