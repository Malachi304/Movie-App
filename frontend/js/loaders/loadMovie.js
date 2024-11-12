let data = []; // module scope variable to store the JSON data
let index = 0; // module scope variable to store the index of the current movie

// Add an event listener to the next button
export function loadMovie(titleElm, directorElm, releaseElm, genreElm, ratingElm) {
        let nextMovieHttpRequest = new XMLHttpRequest();

        // Grab all movies from the JSON file via php
        nextMovieHttpRequest.open('GET', '../../backend/php/nextMovie.php');
        nextMovieHttpRequest.onload = () => {
            if(nextMovieHttpRequest.status === 200){
                try {// try to parse the response text as JSON
                    const contentType = nextMovieHttpRequest.getResponseHeader('content-type'); // get the content type
                    if (contentType && contentType.includes('application/json')) { // check if the content type is JSON
                        data = JSON.parse(nextMovieHttpRequest.responseText); // parse the response text as JSON
                        displayMovie(titleElm, directorElm, releaseElm, genreElm, ratingElm, data[index]);
                        if (index === data.length - 1) {
                            index = 0;
                        }
                        index += 1;
                    }
                }
                catch (error){ // catch if there was an error parsing the response text as JSON
                    console.error("Failed to parse JSON:", error);
                    console.error("Response text:", nextMovieHttpRequest.responseText);
                }
            }
        }

        nextMovieHttpRequest.send();
}

function displayMovie(titleElm, directorElm, releaseElm, genreElm, ratingElm, movie){

    if (title && director && release && genre && rating) { 
        titleElm.innerHTML ='Title: ' + movie.title;
        directorElm.innerHTML ='Director: '+ movie.director; 
        releaseElm.innerHTML ='Release Year: ' + movie.year;
        genreElm.innerHTML = 'Genre: ' + movie.genre;
        ratingElm.innerHTML = 'Rating: ' + movie.rating;
    } else {
        console.error("One or more HTML elements are missing.");
    }

}
// displays all movies
function displayAllMovies(data){

    let httpRequest = new XMLHttpRequest();

}