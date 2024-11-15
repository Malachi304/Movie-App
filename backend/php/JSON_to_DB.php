<?php 
# Adds existing JSON data to the database
# Since the data is alredy added, running this script again will not add the data again
# We ensured this in the schema with unique contraints on title/date

require './config.php';

$JSONfile = file_get_contents('../data.JSON');

# Decode the JSON data into an php array
$movies = json_decode($JSONfile, true);

if ($movies === null) {
    echo "JSON data could not be decoded";
    exit;
}

# This will be used to insert the data into the database.
# The ? will be replaced with the values from the array 
$statement = $conn->prepare("INSERT INTO moviecollection (title, director, year, genre, rating) VALUES (?, ?, ?, ?, ?)");

if (!$statement) {
    die('Prepare failed: ' . $conn->error);
}

foreach ($movies as $movie){
    $statement->bind_param(
        "ssssd",
        $movie['title'],
        $movie['director'],
        $movie['year'],
        $movie['genre'],
        $movie['rating']
    );
    if(!$statement->execute()){
        die('Execute failed: ' . $statement->error);
    }
    else{
        echo "Inserted: ". $movie['title'] . "<br>";
    }
}

$statement->close();
$conn->close();
?>