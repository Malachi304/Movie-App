<?php


//sorts all movies alphabetically

require 'config.php';

// Check the database connection
if ($conn->connect_error) {
    // Return an error message if the connection fails
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit;
}

header("Content-Type: application/json");


// Query to select all movies
$sql = "SELECT * FROM moviecollection ORDER BY title ASC";
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
        'title' => $row['title'],
        'year' => $row['year'],
        'genre' => $row['genre'],
        'rating' => $row['rating'],
        'director' => $row['director']
    );
}

// Close the database connection
mysqli_close($conn);

// Return the movie data as a JSON response
echo json_encode(
    array(
        'movies' => $movies
)
);  

?>