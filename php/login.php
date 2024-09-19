<?php



include 'connect.php';

# Start Log in Session
session_start(); 

if (isset($_POST['LogIn'])){
    $email=$_POST['email'];
    $password=$_POST['password']

    $sql = "SELECT * FROM users WHERE email='$email' and password='$password'";

}
?>