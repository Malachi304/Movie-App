
// this function will be called when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const mainContentDiv = document.getElementById("mainContent");
    // use xmlHttpRequest to get the content of the main page
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "../pages/mainContent.html"); // this will open the main page

    // assign the callback function
    httpRequest.onload = () => {
        if(httpRequest.status === 200){
            mainContentDiv.innerHTML = httpRequest.responseText;

            let title = document.getElementById('title');
            let director = document.getElementById('director');
            let release = document.getElementById('release');
            let genre = document.getElementById('genre');
            let rating = document.getElementById('rating');

            let firstMovieHttpRequest = new XMLHttpRequest();
            // display a random movie initally when the page loads
            firstMovieHttpRequest.open('GET', '../../backend/php/nextMovie.php'); // nextMovieHttpRequest.open('GET', '../../php/backend/nextMovie.php');
            firstMovieHttpRequest.onload = () => { // this function will be called when the request is loaded
                if(firstMovieHttpRequest.status === 200){ // this if statement will check if the request was successful
                    try { // this try statement will try to parse the response text as JSON
                        const contentType = firstMovieHttpRequest.getResponseHeader("content-type");
                        if (contentType && contentType.includes("application/json")) { // this if statement will check if the content type is JSON
                            let data = JSON.parse(firstMovieHttpRequest.responseText);
        
                            if (title && director && release && genre && rating) { 
                                title.innerHTML ='Title: ' + data.title;
                                director.innerHTML ='Director: '+ data.director; 
                                release.innerHTML ='Release Year: ' + data.year; // Use 'year' instead of 'releaseYear'
                                genre.innerHTML = 'Genre: ' + data.genre;
                                rating.innerHTML = 'Rating: ' + data.rating;
                            } else {
                                console.error("One or more HTML elements are missing.");
                            }
        
                        } else { // this else statement will be called if the content type is not JSON
                            console.error("Expected JSON, but received a different content type.");
                            console.error("Response text:", firstMovieHttpRequest.responseText);
                        }
                    } catch (error) { // this catch statement will be called if there was an error parsing the response text as JSON
                        console.error("Failed to parse JSON:", error);
                        console.error("Response text:", firstMovieHttpRequest.responseText);
                    }
                }
            }
            firstMovieHttpRequest.send(); // send the request
            
            let addMovieForm = document.getElementById('add-movie-form');
            let addMovieBTN = document.getElementById('add-movie');
            let submitBTN = document.getElementById('submit-movie');
            let nextBTN = document.getElementById('next-movie');

            // Add an event listener to the add movie button
            if (addMovieForm && addMovieBTN && submitBTN) {
                addMovieBTN.addEventListener('click', ()=> {
                    addMovieForm.style.display = 'block';
                        // Add an event listener to the submit button
                        submitBTN.addEventListener('click', (event) => {
                            // Prevent the default form submission (page reload)
                            event.preventDefault();

                            // Get the form data
                           const formdata = {
                               title: document.getElementById('movie-title').value,
                               director: document.getElementById('movie-director').value,
                               releaseYear: document.getElementById('movie-release').value,
                               genre: document.getElementById('movie-genre').value,
                               rating: document.getElementById('movie-rating').value
                           };

                           // Check if all fields are filled
                           if (formdata.title && formdata.director && formdata.releaseYear && formdata.genre && formdata.rating) {
                               addMovieForm.style.display = 'none';
                               console.log(formdata);
                               // Reset the form
                              addMovieForm.reset();


                              // send the form data to the server
                           } else {
                               alert('Please fill in all fields');
                           }

                        });
                });
            } else {
                console.error('Add Movie Form or Button Element Not Found');
            }

            // Add an event listener to the next button
            nextBTN.addEventListener('click', () =>{
                let nextMovieHttpRequest = new XMLHttpRequest();

                // Grab next movie from the JSON file via php
                nextMovieHttpRequest.open('GET', '../../../backend/php/nextMovie.php');
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
            })


            // Add an event listener to the previous button


            // Add an event listner to the delete button

        } else {
            console.error("Error loading Page: " + httpRequest.status);
            mainContentDiv.innerHTML = "<p> Failed to load page. </p>";
        }
    }
    httpRequest.onerror = () => {
        console.error("There was a network error.");
        mainContentDiv.innerHTML = "<p> Failed to load page. </p>";
    }
    httpRequest.send();
});


/* WITH FETCH
document.addEventListener("DOMContentLoaded", () => {
    // Use fetch to get the content of the main page
    fetch("../pages/mainContent.html")
        .then(response =>{
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(htmlContent => {
            // Load the HTML content into the div
            mainContentDiv.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error("Error loading main page:", error);
            mainContentDiv.innerHTML = "<p>Failed to load main page.</p>";
        });
});
*/