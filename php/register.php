<?php

# Connect to DB
include 'connect.php';


# Add to DB
if (isset($_POST['signUp'])){
    $firstName=$_POST['fname'];
    $lastName=$_POST['lname'];
    $userName=$_POST['uname'];
    $email=$_POST['email'];
    $password=$_POST['password'];

    # Hash password before adding to DB
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    $check_email = "SELECT * FROM users where email='$email'";
    $result=$conn->query($check_email);
    if($result->num_rows>0){
        echo "Email Address Aldreay Exists";
    }
    else{
        $insertQuery = "INSERT INTO users(first_name, last_name,user_name,email,password) VALUES ('$firstName', '$lastName', '$userName', '$email','$hashedPassword')";
        if($conn->query($insertQuery)==TRUE){
            header("location: index.php");
        }
        else{
            echo "Error:".$conn->error;
        }
    }
}
?>