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

# We want to instert the data into both the database and the JSON file(backup)

# Inster into JSON
$JSONfile = file_get_contents('../data.JSON');

# Decode the JSON data into an php array
$movies = json_decode($JSONfile, true);

if($movies === null){
    die("JSON data could not be decoded");
}
else{
    # Create movie object
    $newMovie = [
        'title' => $title,
        'director' => $director,
        'year' => $year,
        'genre' => $genre,
        'rating' => $rating
    ];

    # Check if the movie already exists 


}


# This will be used to insert the data into the database.
# The ? will be replaced with the values from the array 
$statement = $conn->prepare("INSERT INTO moviecollection (title, director, year, genre, rating) VALUES (?, ?, ?, ?, ?)");


$conn->close();
?>