const button = document.getElementById('theme-btn');

button.addEventListener('click', () => {
    // This "toggles" a class on the body every time the button is clicked
    document.body.classList.toggle('dark-mode');
});