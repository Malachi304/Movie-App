// This hides/ displays the register and login forms based


const LogInButton = document.getElementById("LogInButton");
const SignUpButton = document.getElementById("SignUpButton");
const user_name_login_btn = document.getElementById("user-name-login-btn");
const LogInForm = document.getElementById("login-form");
const SignUpForm = document.getElementById("register-form");

const email = document.getElementById('user_email');
const sec = document.getElementById('user-name-login-section');

const emailInput = document.getElementById("user_email")

SignUpButton.addEventListener('click',function(){
    LogInForm.style.display='none';
    SignUpForm.style.display='block';
})

LogInButton.addEventListener('click',function(){
    LogInForm.style.display='block';
    SignUpForm.style.display='none'; 
})

user_name_login_btn.addEventListener('click', function(){
    email.style.display='none';
    sec.style.display='block';
    
})