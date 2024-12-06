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
    $movieExists = false;
    foreach($movies as $movie){
        if($movie['title'] === $title && $movie['year'] === $year){
            $movieExists = true;
            break;
        }
    }

    if($movieExists){
        die("Movie already exists");
    }
    else{
        $movies[] = $newMovie;
        $JSONfile = json_encode($movies);
        file_put_contents('../data.JSON', $JSONfile);
    }



}


# This will be used to insert the data into the database.
# The ? will be replaced with the values from the array 
$statement = $conn->prepare("INSERT INTO moviecollection (title, director, year, genre, rating) VALUES (?, ?, ?, ?, ?)");

if (!$statement) {
    die('Prepare failed: ' . $conn->error);
}

# Bind the parameters to the statement
$statement->bind_param("ssiss", $title, $director, $year, $genre, $rating);

# Execute the statement
if (!$statement->execute()) {
    die('Execute failed: ' . $statement->error);
}

$conn->close();
?>