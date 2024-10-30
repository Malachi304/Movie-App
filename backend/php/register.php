<?php
# NOTE : NEED TO FIX POSSIBLE SQL INJECTION ISSUES

# Connect to DB
include 'connect.php';


# Handle sign up post request
if (isset($_POST['SignUp'])){
    $firstName=$_POST['fname'];
    $lastName=$_POST['lname'];
    $userName=$_POST['reg_uname'];
    $email=$_POST['reg_email'];
    $password=$_POST['reg_password'];
    echo "Email";
    # Hash password before adding to DB
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // Check if email already exists
    $check_email = "SELECT * FROM users where email='$email'";
    $result=$conn->query($check_email);
    if($result->num_rows>0){
        echo "Email Address Aldreay Exists";
    }
    // Insert user data
    else{
        $insertQuery = "INSERT INTO users(first_name, last_name,user_name,email,password) 
        VALUES ('$firstName', '$lastName', '$userName', '$email','$hashedPassword')";
        if($conn->query($insertQuery)==TRUE){
            header("location: ../frontend/pages/index.html");
            echo "Account Created";
        }
        else{
            echo "Error:".$conn->error;
        }
    }
}
?>