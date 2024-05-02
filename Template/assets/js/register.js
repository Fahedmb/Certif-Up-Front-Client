document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        username: document.getElementById('username').value,
        bio: document.getElementById('bio').value,
        phone: document.getElementById('phone').value,
        fullname: document.getElementById('fullname').value,
        occupation: document.getElementById('occupation').value
    };
    
    try {
        const response = await fetch('http://localhost:4000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        // Frontend code
        if (response.status === 201) {
            const data = await response.json();
            
            // Set the token in a cookie
            document.cookie = `token=${data.token}; path=/`;
            
            // Redirect to the /index_2 page
            window.location.href = '/index_2';
        } else {
            const errorMessage = await response.text();
            console.error(errorMessage);
        }
    } catch (error) {
        console.error(error);
    }
});