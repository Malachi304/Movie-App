document.addEventListener("DOMContentLoaded", () => {
    // Selecting the div where content will load
    let registerContentDiv = document.getElementById("registerContent");
    // Automatically load the register page content when the DOM is fully loaded
    let httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", "../pages/register.html");
    httpRequest.onload = () => {
        if(httpRequest.status === 200){
            registerContentDiv.innerHTML = httpRequest.responseText;
        } else {
            console.error("Error loading Page: " + httpRequest.status);
            registerContentDiv.innerHTML = "<p> Failed to load page. </p>";
        }
        httpRequest.onerror = () => {
            console.error("There was a network error.");
            registerContentDiv.innerHTML = "<p> Failed to load page. </p>";
        }
    }
    httpRequest.send(); 
})

