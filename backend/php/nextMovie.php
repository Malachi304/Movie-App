<?php

// next movie function

include 'connect.pgp'; // Connect to DB (THIS WILL BE USED IN LATER VERSIONS)

// Loads the movie data from the JSON file
$json = file_get_contents('../movieData.json');

// Decode the JSON data into an php array
// This is done so that we can access the data from the array
$data = json_decode($json, true);

// get the next movie
$nextMovie = $data[0];

// return the next movie as JSON
echo json_encode($nextMovie);

?>