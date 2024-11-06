
// Create a new XMLHttpRequest object
document.addEventListener("DOMContentLoaded", () => {
    const mainContentDiv = document.getElementById("mainContent");

    // use xmlHttpRequest to get the content of the main page
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "../pages/mainContent.html");
    // assign the callback function
    httpRequest.onload = () => {
        if(httpRequest.status === 200){
            mainContentDiv.innerHTML = httpRequest.responseText;

            // Add the add movie button
            let addMovieForm = document.getElementById('add-movie-form');
            let addMovieBTN = document.getElementById('add-movie');
            let submitBtn = document.getElementById('submit-movie');

            // Add an event listener to the add movie button
            if (addMovieForm && addMovieBTN && submitBtn) {
                addMovieBTN.addEventListener('click', ()=> {
                    addMovieForm.style.display = 'block';
                        // Add an event listener to the submit button
                        submitBtn.addEventListener('click', (event) => {
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