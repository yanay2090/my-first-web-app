const button = document.getElementById('theme-btn');

button.addEventListener('click', () => {
    // This "toggles" a class on the body every time the button is clicked
    document.body.classList.toggle('dark-mode');
});

// This function runs as soon as the page loads
async function getServerStatus() {
    try {
        // 1. Request data from our local server
        const response = await fetch('http://localhost:3000/api/status');
        
        // 2. Turn the response into a JSON object
        const data = await response.json();
        
        // 3. Update the HTML with the message from the server
        document.getElementById('server-message').innerText = data.message;
    } catch (error) {
        console.error("Could not reach the server:", error);
        document.getElementById('server-message').innerText = "Server is offline 😴";
    }
}

getServerStatus();