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


/* WITH FETCH
// Selecting the div where content will load
const registerContentDiv = document.getElementById("registerContent");

// Automatically load the register page content when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Use fetch to get the content of the register page
    fetch("../pages/register.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(htmlContent => {
            // Load the HTML content into the div
            registerContentDiv.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error("Error loading register page:", error);
            registerContentDiv.innerHTML = "<p>Failed to load register page.</p>";
        });
});
*/
