
// Add an event listener to the next button
export function loadMovie(nextBTN, title, director, release, genre, rating, updateIndex) {
        let nextMovieHttpRequest = new XMLHttpRequest();

        // Grab next movie from the JSON file via php
        nextMovieHttpRequest.open('GET', '../../backend/php/nextMovie.php');
        nextMovieHttpRequest.onload = () => {
            if(nextMovieHttpRequest.status === 200){
                try {// try to parse the response text as JSON
                    const contentType = nextMovieHttpRequest.getResponseHeader('content-type'); // get the content type
                    if (contentType && contentType.includes('application/json')) { // check if the content type is JSON
                        let data = JSON.parse(nextMovieHttpRequest.responseText); // parse the response text as JSON
                        console.log(data);
    
                        if (title && director && release && genre && rating) { 
                            title.innerHTML ='Title: ' + data.title;
                            director.innerHTML ='Director: '+ data.director; 
                            release.innerHTML ='Release Year: ' + data.year; // Use 'year' instead of 'releaseYear'
                            genre.innerHTML = 'Genre: ' + data.genre;
                            rating.innerHTML = 'Rating: ' + data.rating;
                        } else {
                            console.error("One or more HTML elements are missing.");
                        }
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