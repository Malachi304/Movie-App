<?php

require 'config.php';

# Delete the movie from the database
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $movieName = $_POST['title'];
    $query = "DELETE FROM moviecollection WHERE title = $movieName";
    $result = mysqli_query($conn, $query);
}

# Delete the movie from the JSON file
$JSONfile = file_get_contents('../data.JSON');

# Decode the JSON data into an php array
$movies = json_decode($JSONfile, true);

if ($movies === null) {
    die("JSON data could not be decoded");
}
else{
    # Delete the movie from the array
    $index = array_search($movieName, array_column($movies, 'title'));
    if ($index !== false) {
        unset($movies[$index]);
    }
    # Encode the array back into JSON
    $newJSON = json_encode($movies);
    file_put_contents('../data.JSON', $newJSON);
}

if (!$result) {
    echo "Error deleting movie: " . mysqli_error($conn);
}

mysqli_close($conn);

?>