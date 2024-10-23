console.log('check1'); 

// Function to handle server interaction 
function submit_registerForm(){
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', function(event){
        event.preventDefault(); 
        const formdata = new FormData(form);
        console.log('event listner activated');
        for(const [key, value] of formdata.entries()){
            console.log(key +' '+ value);
        }
//backend\php\register.php
        fetch('backend/php/register.php',{
            method:'POST',
            body: formdata
    
        })
    
        .then(response => response.text())
        .then(data => {
            document.getElementById('register-message').innerHTML = data;
    
        })
        .catch(error => {
            console.error('Error: ', error); 
        });
    });
    console.log('event listner done'); 

}

console.log('check'); 
submit_registerForm(); 