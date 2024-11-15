<?php

// Connect to DB
include 'connect.php';

// Handle login post request
if (isset($_POST['LogIn'])){
    $userName = $_POST['uname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $check_username = "SELECT * FROM users where email='$userName'";
    $check_email = "SELECT * FROM users where email='$email'";
    $check_password = "SELECT * FROM users where email='$password'";

}

?>