
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
