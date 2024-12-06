<?php

require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents('php://input'), true);
    $movieName = $postData['title'];    

    // Check if title is received correctly
    if (empty($movieName)) {
        echo json_encode(["error" => "Title is empty."]);
        exit;
    }

    header('Content-Type: application/json');

    // Continue with the deletion process
    $query = "DELETE FROM moviecollection WHERE title = ?";
    $stmt = mysqli_prepare($conn, $query);

    if ($stmt === false) {
        die(json_encode(["error" => "Error preparing the statement: " . mysqli_error($conn)]));
    }

    mysqli_stmt_bind_param($stmt, 's', $movieName);
    $result = mysqli_stmt_execute($stmt);

    // Check if the movie was actually deleted (affected rows > 0)
    if ($result && mysqli_stmt_affected_rows($stmt) > 0) {
        echo json_encode(["message" => "Movie deleted successfully."]);
    } else {
        // If no rows were affected, the movie wasn't found or already deleted
        echo json_encode(["error" => "Movie not found or already deleted."]);
        http_response_code(404); // Not Found
    }

    mysqli_stmt_close($stmt);
    $conn->close();
} else {
    echo json_encode(["error" => "Invalid request method."]);
    http_response_code(405); // Method Not Allowed
}
