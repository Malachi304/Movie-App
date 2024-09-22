
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
            <form  method="post" action="register.php">
                <div class="input-group">
                    <input type="text" name="fname" id="first_name" placeholder="" required>
                    <label for="fname">First Name</label>
                </div>
                <div class="input-group">
                    <input type="text" name="uname" id="user_name" placeholder="" required>
                    <label for="uname">Username</label>
                </div>
                
                <div class="input-group">
                    <input type="text" name="lname" id="last_name" placeholder="" required>
                    <label for="lname">Last Name</label>
                </div>
                <div class="input-group">
                    <input type="email" name="email" id="user_email" placeholder="Email@gmail.com" required>
                    <label for="email">Email</label>
                </div>
                <div class="input-group">
                    <input type="password" name="password" id="user_password" placeholder="" required >
                    <label for="password">Set Password</label>
                </div>
                <div class="input-group">
                    <input type="password" name="" id="verify_password" placeholder="" required>
                    <label for="password">Retype Password</label>
                </div>
                <input type="submit" class="btn" value="Sign Up" name="SignUp">                

            </form>
                <h6>-----Or-----</h6>
                <button id="LogInButton">Log In</button>   

        </section>


        <section id="login-form">
            <h2>Login</h2>
            <form method="post" action="login.php">
                <div class="input-group">
                    <input type="email" name="email" id="user_email" placeholder="Email@gmail.com">
                    <label for="email">Email</label>
                    <div id="user-name-login-section" style="display: none;">
                        <input type="text" name="uname" id="user_name" placeholder="" required>
                        <label for="uname">Username</label>
                    </div>
                </div>
                <div class="input-group">
                    <input type="password" name="password" id="user_password" placeholder="Enter Password" required>
                    <label for="passwprd">Enter Password</label>
                </div>
                <input type="submit" class="btn" value="Log In" name="LogIn">
                </form>
                <button id="user-name-login-btn">Sign In With Username</button>
                <h6>-----Or-----</h6>
                <button id="SignUpButton">Sign Up</button>   
        </section>

             

    </article>
</body>
    <script src="../public/register-login.js"></script>
</html>