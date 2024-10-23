<?php
# Credentals for DB connection
$servername = 'localhost';
$username = 'root';
$password = 'Aaliyah_1998';
$dbname = 'movie_app';

# Connect with creds
$conn = new mysqli($servername, $username, $password, $dbname);

# If error occurs when connecting
if($conn->connect_error){
    die("Connection Failed: " . $conn->connect_error);
}
else{
    echo"Connection Successful!";
}

?>