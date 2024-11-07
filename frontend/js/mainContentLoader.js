
// Create a new XMLHttpRequest object
document.addEventListener("DOMContentLoaded", () => {
    const mainContentDiv = document.getElementById("mainContent");
    let title = document.getElementById('title');
    let director = document.getElementById('director');
    let release = document.getElementById('release');
    let genre = document.getElementById('genre');
    let rating = document.getElementById('rating');

    // use xmlHttpRequest to get the content of the main page
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "../pages/mainContent.html");

    let firstMovieHttpRequest = new XMLHttpRequest();
    // display a random movie initally
    firstMovieHttpRequest.open('GET', '../../backend/php/nextMovie.php'); // nextMovieHttpRequest.open('GET', '../../php/backend/nextMovie.php');
    firstMovieHttpRequest.onload = () => {
        if(firstMovieHttpRequest.status === 200){
            let data = JSON.parse(firstMovieHttpRequest.responseText);
            console.log(data);
        }
    }
    firstMovieHttpRequest.send();

    // assign the callback function
    httpRequest.onload = () => {
        if(httpRequest.status === 200){
            mainContentDiv.innerHTML = httpRequest.responseText;

            // Add the add movie button
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
                let nextMovieHttpRequest = new HttpRequest();

                // Grab next movie from the JSON file via php
                nextMovieHttpRequest.open('GET', '../../backened/php/nextMovie.php');
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