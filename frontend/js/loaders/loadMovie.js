let data = {}; // Change this to an object to store the movie data (since PHP returns an object)
let index = -1; // Index is not needed anymore, since you're handling one movie

// Add an event listener to the next button
export function loadMovie(titleElm, directorElm, releaseElm, genreElm, ratingElm, allMovies) {
    let nextMovieHttpRequest = new XMLHttpRequest();

    // Grab the highest-rated movie from the PHP file
    nextMovieHttpRequest.open('GET', '../../backend/php/nextMovie.php');
    nextMovieHttpRequest.onload = () => {
        if (nextMovieHttpRequest.status === 200) {
            try {
                const contentType = nextMovieHttpRequest.getResponseHeader('content-type'); // Get the content type
                if (contentType && contentType.includes('application/json')) { // Check if the content type is JSON
                    data = JSON.parse(nextMovieHttpRequest.responseText); // Parse the response as JSON
                 if (data.error) {
                        // If there's an error message in the response, log it
                        console.error("Error:", data.error);
                    } else {
                        // Display the movie details if no error
                        displayMovie(titleElm, directorElm, releaseElm, genreElm, ratingElm, data);
                    }
                }
            } catch (error) { // Catch if there was an error parsing the response text as JSON
                console.error("Failed to parse JSON:", error);
                console.error("Response text:", nextMovieHttpRequest.responseText);
            }
        }
    }

    nextMovieHttpRequest.send();
}

// Display the movie details
function displayMovie(titleElm, directorElm, releaseElm, genreElm, ratingElm, movie) {
    if (movie && titleElm && directorElm && releaseElm && genreElm && ratingElm) { 
        titleElm.innerHTML = 'Title: ' + movie.title || 'N/A';
        directorElm.innerHTML = 'Director: ' + movie.director || 'N/A'; 
        releaseElm.innerHTML = 'Release Year: ' + movie.year || 'N/A';
        genreElm.innerHTML = 'Genre: ' + movie.genre || 'N/A';
        ratingElm.innerHTML = 'Rating: ' + movie.rating || 'N/A';
    } else {
        console.error("Movie data is missing or one of the HTML elements is undefined.");
    }
}

// Function to display all movies (you may not need this if only a single movie is displayed)
export function displayAllMovies() {
    let allMoviesDiv = document.getElementById('bottom-container');
    let allMoviesHttpRequest = new XMLHttpRequest();
    console.log('test0')
    // Make a GET request to the loadall.php file
    allMoviesHttpRequest.open('GET', '../../backend/php/allMovies.php');
    console.log('test')
    allMoviesHttpRequest.onload = () => {
        if (allMoviesHttpRequest.status === 200) {
            try {
                const contentType = allMoviesHttpRequest.getResponseHeader('content-type'); // Get the content type
                console.log('Content Type:', contentType);

                if (contentType && contentType.includes('application/json')) { // Check if the content type is JSON
                    let data = JSON.parse(allMoviesHttpRequest.responseText); // Parse the response as JSON
                    console.log(data);
                    allMoviesDiv.innerHTML = data.map(movie => movie.title).join("<br>");
                }
            } catch (error) { // Catch if there was an error parsing the response text as JSON
                console.error("Failed to parse JSON:", error);
                console.error("Response text:", allMoviesHttpRequest.responseText);
            }
        }
    }

    allMoviesHttpRequest.send();
}

export function clearAllMovies() {
    let allMoviesDiv = document.getElementById('bottom-container');
    allMoviesDiv.innerHTML = ' '; // Clear the content of the div
}

export function deleteMovie(titleElm){
    console.log('title: ' + titleElm);
    let deleteMovieHttpRequest = new XMLHttpRequest();
    deleteMovieHttpRequest.open('POST', '../../backend/php/deleteMovie.php');
    deleteMovieHttpRequest.setRequestHeader('Content-Type', 'application/json');
    deleteMovieHttpRequest.onload = () => {

        if(deleteMovieHttpRequest.status === 200){
            console.log(deleteMovieHttpRequest.responseText);
        } else {
            console.error("Error deleting movie: " + deleteMovieHttpRequest.status);
        }
    }
    deleteMovieHttpRequest.onerror = () => {
        console.error("There was a network error");
    }
    deleteMovieHttpRequest.send(JSON.stringify({title: titleElm}));
}

// Function to sort movies alphabetically
export function sort() {
    let allMoviesDiv = document.getElementById('bottom-container');
    let allMoviesHttpRequest = new XMLHttpRequest();
    allMoviesHttpRequest.open('GET', '../../backend/php/allMovies.php');
    allMoviesHttpRequest.onload = () => {
        if (allMoviesHttpRequest.status === 200) {
            try {
                const contentType = allMoviesHttpRequest.getResponseHeader('content-type'); // Get the content type
                if (contentType && contentType.includes('application/json')) { // Check if the content type is JSON
                    let data = JSON.parse(allMoviesHttpRequest.responseText); // Parse the response as JSON
                    data.sort((a, b) => a.title.localeCompare(b.title));
                    allMoviesDiv.innerHTML = data.map(movie => movie.title).join("<br>");
                }
            } catch (error) { // Catch if there was an error parsing the response text as JSON
                console.error("Failed to parse JSON:", error);
                console.error("Response text:", allMoviesHttpRequest.responseText);
            }
        }
    }

    allMoviesHttpRequest.send();
}