<?php
require '../config.php';

# We get the data from the request
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $title = $_POST['title'];
    $director = $_POST['director'];
    $year = $_POST['year'];
    $genre = $_POST['genre'];
    $rating = $_POST['rating'];
}


$conn->close();
?>