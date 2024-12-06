//function to delete a movie

export function deleteMovie(titleElm){
    console.log('test')
    let deleteMovieHttpRequest = new XMLHttpRequest();
    deleteMovieHttpRequest.open('POST', '../../backend/php/deleteMovie.php');
    deleteMovieHttpRequest.onload = () => {
        if(deleteMovieHttpRequest.status === 200){
            titleElm.innerHTML = "Deleted Successfully";
        } else {
            console.error("Error deleting movie: " + deleteMovieHttpRequest.status);
        }
    }
    deleteMovieHttpRequest.onerror = () => {
        console.error("There was a network error");
    }
    deleteMovieHttpRequest.send();
}