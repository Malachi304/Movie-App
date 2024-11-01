    console.log('check1'); 

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
    console.log('check 2'); 


