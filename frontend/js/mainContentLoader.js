const mainContentDiv = document.getElementById("mainContent");
console.log("test");
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