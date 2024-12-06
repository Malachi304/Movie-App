<?php

// Include the database configuration file
require 'config.php';

// Check the database connection
if ($conn->connect_error) {
    // Return an error message if the connection fails
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Get the last movie ID from the session or database
session_start(); // Start session to track the movie state
if (!isset($_SESSION['last_movie_id'])) {
    $_SESSION['last_movie_id'] = 0; // Default to the first movie
}

// Query to get the next movie based on the last returned movie ID
$query = "SELECT * FROM moviecollection WHERE id > " . $_SESSION['last_movie_id'] . " ORDER BY id ASC LIMIT 1";
$result = $conn->query($query);

// Check if the query was successful
if (!$result) {
    // Return an error if the query fails
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "Query failed: " . $conn->error]);
    exit;
}

// Fetch the movie(s) from the result
$movies = $result->fetch_all(MYSQLI_ASSOC);

// If no more movies are found, reset to the first movie
if (empty($movies)) {
    $_SESSION['last_movie_id'] = 0; // Reset to the first movie
    $query = "SELECT * FROM moviecollection ORDER BY id ASC LIMIT 1";
    $result = $conn->query($query);
    $movies = $result->fetch_all(MYSQLI_ASSOC);
}

// Store the last returned movie ID in the session
$_SESSION['last_movie_id'] = $movies[0]['id'];

// Set the response content type to JSON
header('Content-Type: application/json');

// Return the movie as JSON
echo json_encode($movies[0]);  // Return the first movie (since we're sending just one movie)

// Close the database connection
$conn->close();

?>
