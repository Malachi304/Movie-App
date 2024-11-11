// Handle the form submission for adding a new movie

export function addMovie(addMovieForm, addMovieBTN, submitBTN) {
                // Add an event listener to the add movie button
                if (addMovieForm && addMovieBTN && submitBTN) {
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
                } else {
                    console.error('Add Movie Form or Button Element Not Found');
                }
}


