let timeout;

function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        window.location.href = '../index.html'; // Redirect to the index page
    }, 300000); // 300000 milliseconds = 5 minutes
}

// Set the initial timeout
resetTimeout();

// Reset the timeout on various events indicating user activity
window.addEventListener('mousemove', resetTimeout);
window.addEventListener('mousedown', resetTimeout);
window.addEventListener('keypress', resetTimeout);
window.addEventListener('touchmove', resetTimeout);
window.addEventListener('onscroll', resetTimeout);

{/* <script src="path/to/timeout.js"></script> */}