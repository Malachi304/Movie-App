<?php

// load all movies from the database and return them as a JSON object
require '../config.php';

# Get all movies from the database
$query = "SELECT * FROM movies";
$result = $conn->query($query);

if (!$result) {
    die('Query failed: ' . $conn->error);
}

# Decode the JSON data into an php array
$movies = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($movies);

$conn->close();


?>