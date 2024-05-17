document.addEventListener('DOMContentLoaded', () => {
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
        logoutLink.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent the default link behavior
            try {
                const response = await fetch('http://localhost:4000/auth/logout', {
                    method: 'POST',
                    credentials: 'same-origin' // Include cookies
                });
                if (response.status === 200) {
                    // Redirect to the login page
                    window.location.href = '/login';
                } else {
                    console.error('Logout failed:', response.statusText);
                }
            } catch (error) {
                console.error('Logout failed:', error);
            }
        });
    }
});
