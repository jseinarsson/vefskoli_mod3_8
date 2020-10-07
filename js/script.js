const loading = document.querySelector(".loading");
const dashboard = document.querySelector(".dashboard");

// PSEUDO-LOADING DELAY
setTimeout(function(){
    loading.classList.add("hidden");
    loading.classList.remove("loading");
    dashboard.classList.remove("hidden");
    dashboard.classList.add("reveal");
}, 10500);

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const nameBtn = document.querySelector(".name__button");
const nameInput = document.querySelector(".name__textbox");
const nameOutput = document.querySelector(".name__output");

// NAME INPUT AND UI CHANGE
nameBtn.addEventListener('click', function(){
    // 1. Grab input value to use later
    // Create input value text node.
    const  nameInputContent = document.createTextNode(nameInput.value);
    // Add text node to <span> with class ".name__output" (replacing existing node)
    nameOutput.replaceChild(nameInputContent, nameOutput.lastChild);
    
    // 2. Switch the "UI"
    screen1.classList.add("dashboard--off");
    screen1.classList.remove("dashboard--on");
    screen2.classList.add("dashboard--on");
    screen2.classList.remove("dashboard--off");
    screen2.classList.add("dashboard--reveal");
});

const dateOutput = document.querySelector(".info__date--current");

//DISPLAY TIME AND DATE
function currentDate() {
    // Create an output with longform date as text string
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let today = new Date();

    let hour = today.getHours();
    let minute = today.getMinutes();

    let day = days[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();

    const currentDateOutput = document.createTextNode(`${hour}:${minute} ${day}, ${month} ${date}, ${year}`);
    
    // Add currentDateOutput as textnode to object in DOM
    dateOutput.replaceChild(currentDateOutput, dateOutput.lastChild);
}

// Set interval to run currentDate function every 10 seconds
setInterval(currentDate, 10000);

// RESET PROGRAM

const exitBtn = document.querySelector(".exitBtn");

