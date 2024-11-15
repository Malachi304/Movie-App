
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
            
            // Get the form data
            const formdata = new FormData(event.target);

            let xhr = new XMLHttpRequest();
            xhr.open('POST', '../../backend/php/addMovie.php');

            xhr.onload = () => {
                if(xhr.status ===200){
                    console.log("Output:"+ formdata);

                }
            }
            xhr.onerror = () => { // if there was an error with the request
                console.error("There was a network error");
            }
            xhr.send(formdata);
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

   
