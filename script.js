let Days = document.querySelector(".days");
let Hours = document.querySelector(".hours");
let Minutes = document.querySelector(".minutes");
let Seconds = document.querySelector(".seconds");

let countDownDate = new Date("Sep 1, 2024 07:00:00").getTime();

function getTargetDate(targetDate) {
    let newDate = new Date(targetDate);
    newDate.setDate(newDate.getDate() + 7);
    newDate.setHours(7, 0, 0, 0);
    return newDate;
}

function updateCountDown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        // Set new target date
        countDownDate = getTargetDate(new Date(countDownDate)).getTime();
        updateCountDown(); // Recursive call to immediately update display
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    Days.textContent = days.toString().padStart(2, "0");
    Hours.textContent = hours.toString().padStart(2, "0");
    Minutes.textContent = minutes.toString().padStart(2, "0");
    Seconds.textContent = seconds.toString().padStart(2, "0");
}

// Initial call to set up the countdown
updateCountDown();

// Set interval to update every second
setInterval(updateCountDown, 1000);