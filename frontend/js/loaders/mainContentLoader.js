import { loadMovie } from "../util/loadMovie.js";
import { addMovie } from "../util/addMovie.js";

// this function will be called when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const mainContentDiv = document.getElementById("mainContent");
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "../pages/mainContent.html"); // this will open the main page once the DOM is fully loaded

    // Assign the callback function 
    httpRequest.onload = () => {
        if(httpRequest.status === 200){
            mainContentDiv.innerHTML = httpRequest.responseText;

            // Get the HTML elements from the DOM 
            let title = document.getElementById('title');
            let director = document.getElementById('director');
            let release = document.getElementById('release');
            let genre = document.getElementById('genre');
            let rating = document.getElementById('rating');

            // load the first movie
            loadMovie(title, director, release, genre, rating);
            
            // Grab the HTML elements from the DOM that will be used to add a movie
            let addMovieForm = document.getElementById('add-movie-form');
            let addMovieBTN = document.getElementById('add-movie');
            let submitBTN = document.getElementById('submit-movie');

            addMovieBTN.addEventListener('click', ()=> {
            addMovie(addMovieForm, addMovieBTN, submitBTN);
            });

            let nextBTN = document.getElementById('next-movie');

            // Add an event listener to the next button to load the next movie
            nextBTN.addEventListener('click', () =>{
                loadMovie(title, director, release, genre, rating);
            });

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
