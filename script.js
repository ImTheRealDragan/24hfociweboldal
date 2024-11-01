// script.js

// Select checkbox and body elements
const checkbox = document.getElementById('theme-toggle');
const body = document.body;
const timer = document.getElementById("timer");

// Check for saved mode in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    checkbox.checked = true;
}

// Toggle dark mode on checkbox change
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        body.classList.add('dark-mode');
        timer.classList.add("dark-mode");
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        timer.classList.remove("dark-mode");
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