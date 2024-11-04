// Using js middleman (AJAX) to avoid reloading the page when you submit the form

const form = document.getElementById('registerForm');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formdata = new FormData(form); // Get the form data
    let httpRequest = new XMLHttpRequest(); // create the object

    httpRequest.open('POST', '../backend/php/register.php'); // Use a file in reference to the page where you are!
    // Assign the callback function
    httpRequest.onload = () => {
        if(httpRequest.status === 200){ // If you have problems, do an alert of the response to see that what you expect as a response is fine
            console.log(httpRequest.responseText);
        } else {
            console.error("Error loading Page: " + httpRequest.status);
            document.getElementById('register-message').innerHTML = "<p> Failed to load. </p>";
        }
        httpRequest.onerror = () => { 
            console.error("There was a network error");
            document.getElementById('register-message').innerHTML = "<p> Failed to load. </p>";
        }   
    }
    // Send the form data
    httpRequest.send(formdata);

})

/* FETCH APPROACH
    // Get the form
    const form = document.getElementById('registerForm');
    // Add an event listener to the form
    form.addEventListener('submit', function(event){
        // Prevent the default form submission
        event.preventDefault(); 
        // Get the form data
        const formdata = new FormData(form);

        // Send the form data to the server
        for(const [key, value] of formdata.entries()){
            console.log(key +' '+ value);
        }
        fetch('../../backend/php/register.php',{
            method:'POST',
            body: formdata
    
        })
        // Get the response from the server
        .then(response => response.text())
        .then(data => {
            document.getElementById('register-message').innerHTML = data;
    
        })
        .catch(error => {
            console.error('Error: ', error); 
        });
    });

*/
