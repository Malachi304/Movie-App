
document.addEventListener("DOMContentLoaded", () => {
    // Selecting the div where content will load
    const currentMovieDiv = document.getElementById('addMovie');
   // console.log(currentMovieDiv)

    let httpRequest = new XMLHttpRequest(); 
    httpRequest.open("GET", "../pages/addMovie.html");

    httpRequest.onload = () => {
        if(httpRequest.status === 200){
        currentMovieDiv.innerHTML = httpRequest.responseText;

        // Grab the HTML elements from the DOM that will be used to add a movie
        let addMovieForm = document.getElementById('add-movie-form');

        addMovieForm.addEventListener('submit', (event)=> {
            event.preventDefault();

            
        });

        }
        else{
            console.error("Error loading Page: " + httpRequest.status);
            currentMovieDiv.innerHTML = "<p> Failed to load page. </p>";
        }
    }

    httpRequest.onerror = () => {
        console.error("There was a network error");
        currentMovieDiv.innerHTML = "<p> Failed to load page. </p>";
    }

    httpRequest.send();
})

   
