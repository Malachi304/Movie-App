<?php

// next movie function

// Loads the movie data from the JSON file
$json = file_get_contents('../data.json');
// confirm that the data was loaded
if ($json === false) {
    echo "Error loading movie data";
    exit();
}
else{
    // confirm that the data was loaded
    // Decode the JSON data into an php array
    // This is done so that we can access the data from the array   
    $data = json_decode($json, true);

    // set the content type
    header('content-type: application/json');

    // return the next movie as JSON
    echo json_encode($data);

}

?> 