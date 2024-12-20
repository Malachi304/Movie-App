<?php


require 'config.php';

// Check the database connection
if ($conn->connect_error) {
    // Return an error message if the connection fails
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit;
}


// Query to select all movies
$sql = "SELECT * FROM moviecollection";
$result = mysqli_query($conn, $sql);

// Check if the query was successful
if (!$result) {
    die("Query failed: " . mysqli_error($conn));
}

// Initialize an empty array to store the movie data
$movies = array();

// Loop through each row in the result set
while ($row = mysqli_fetch_assoc($result)) {
    // Add the movie data to the array
    $movies[] = array(
        "title" => $row["title"],
        "director" => $row["director"],
        "year" => $row["year"],
        "genre" => $row["genre"],
        "rating" => $row["rating"]
    );
}

// Close the database connection
$conn->close();
// Output the movie data as JSON
header("Content-Type: application/json");
echo json_encode($movies);

?>