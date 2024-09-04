<?php

$config = include('config.php');

$servername = $config['servername'];
$username = $config['username'];
$password = $config['password'];
$dbname = $config['dbname'];

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Connection Failed: " . $conn->connection_error);
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register or Login</title>
</head>
<body>
    <article id="container">
        <section id ="register-form" style="display: none;">
            <h2>Register Account</h2>
            <form  method="POST" action="">
                <div class="input-group">
                    <input type="text" name="fname" id="fname" placeholder="First Name" required>
                    <label for="fname">First Name</label>
                </div>
                <div class="input-group">
                    <input type="text" name="lname" id="lname" placeholder="Last Name" required>
                    <label for="lname">Last Name</label>
                </div>
                <div class="input-group">
                    <input type="email" name="email" id="email" placeholder="Email@gmail.com" required>
                    <label for="email">Email</label>
                </div>
                <div class="input-group">
                    <input type="password" name="create-password" id="create-password" placeholder="Create Password" required>
                    <label for="password">Set Password</label>
                </div>
                <div class="input-group">
                    <input type="password" name="create-password" id="create-password" placeholder="Retype Password" required>
                    <label for="password">Retype Password</label>
                </div>
                <input type="submit" class="btn" value="Sign Up" name="SignUp">                

            </form>
                <h6>-----Or-----</h6>
                <button id="SignInButton">Sign In</button>   

        </section>


        <section id="login-form">
            <h2>Login</h2>
            <form method="POST" action="">
                <div class="input-group">
                    <input type="email" name="email" id="email" placeholder="Email@gmail.com" required>
                    <label for="email">Email</label>
                </div>
                <div class="input-group">
                    <input type="password" name="password" id="password" placeholder="Enter Password" required>
                    <label for="passwprd">Enter Password</label>
                </div>
                <input type="submit" class="btn" value="Sign In" name="SignIn">
                </form>
                
                <h6>-----Or-----</h6>
                <button id="SignUpButton">Sign Up</button>   
        </section>

             

    </article>
</body>
    <script src="../public/register-login.js"></script>
</html>