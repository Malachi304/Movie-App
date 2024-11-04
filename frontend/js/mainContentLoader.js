
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