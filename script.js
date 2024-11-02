// script.js

// Select checkbox and body elements
const checkbox = document.getElementById('theme-toggle');


// Check for saved mode in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.documentElement.setAttribute('data-bs-theme','dark')
    checkbox.checked = true;
}

// Toggle dark mode on checkbox change
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.documentElement.setAttribute('data-bs-theme','dark')
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        document.documentElement.setAttribute('data-bs-theme','light')
        localStorage.setItem('dark-mode', 'disabled');
    }
});





// Set the date we're counting down to
var countDownDate = new Date("Jan 17, 2025 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);






// Function to update the time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    // Display the time
    document.getElementById('time').textContent = formattedTime;
}

// Initial call to display time immediately
updateTime();
// Update the time every second
setInterval(updateTime, 1000);
