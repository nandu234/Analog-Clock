// Get references to DOM elements 

const body = document.querySelector("body"),
 hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second");
modeSwitch = document.querySelector(".mode-switch");

// Add a click event to modeSwitch

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark")
})


const updateTime = () => {
    //Get current time and calculate degress for clock hands
    let date = new Date(),
    secToDeg=(date.getSeconds()/60)*360;
    minToDeg=(date.getMinutes()/60)*360;
    HrToDeg=(date.getSeconds()/12*360);

    //console.log(secToDeg)

    secondHand.style.transform = `rotate(${secToDeg})`;
    minuteHand.style.transform = `rotate(${minToDeg})`;
    hourHand.style.transform = `rotate(${HrToDeg})`;
}

setInterval(updateTime, 1000);

updateTime();