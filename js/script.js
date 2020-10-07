let dashboard = document.querySelector(".dashboard");
const dashboardClone = dashboard.cloneNode(true);

// PSEUDO-LOADING DELAY
const loading = document.querySelector(".loading");

setTimeout(function(){
    loading.classList.add("hidden");
    loading.classList.remove("loading");
    dashboard.classList.remove("hidden");
    dashboard.classList.add("reveal");
}, 10500);

// NAME INPUT AND UI CHANGE
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const nameBtn = document.querySelector(".name__button");
const nameInput = document.querySelector(".name__textbox");
const nameOutput = document.querySelector(".name__output");

const mainMessage = document.querySelector(".main__message");

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

    // 3. Add message to user after 0.5 seconds
    setTimeout(function() {
        const newMessageContainer = document.createElement("p");
        const newMessage = document.createTextNode("You have aquired a new specimen! Would you like to scan the specimen now?");

        newMessageContainer.appendChild(newMessage);

        mainMessage.appendChild(newMessageContainer);
    }, 500);
});


//SCANNING BUTTON ACTIONS
const scanBtn = document.querySelector(".main__button");
let timesClicked = 0;

scanBtn.addEventListener('click', function(){
    timesClicked++;
    let btnText = ""

    if (timesClicked==1) {
        // Change button appearance
        scanBtn.classList.add("btnInvert");
        btnText = "SCANNING..."
    
        let btnTextInput = document.createTextNode(btnText);
        scanBtn.replaceChild(btnTextInput, scanBtn.lastChild);
    
        // After scan is complete (7seconds) change button text again
        setTimeout(function() {
            btnText = "SCAN COMPLETE"
            btnTextInput = document.createTextNode(btnText);
            scanBtn.replaceChild(btnTextInput, scanBtn.lastChild);
            
            // Change message on top
            const newMessageContainer = document.createElement("p");
            const newMessage = document.createTextNode("This specimen appears to be a domestic bovine earthling.");

            newMessageContainer.appendChild(newMessage);

            mainMessage.replaceChild(newMessageContainer, mainMessage.lastChild);
        }, 7000);
    } else {
        // If button has been clicked once before, run this function.
        const secondMessageContainer = document.createElement("p");
        const secondMessage = document.createTextNode("You have no new specimens to scan.");

        secondMessageContainer.appendChild(secondMessage);

        mainMessage.replaceChild(secondMessageContainer, mainMessage.lastChild);
    };
});

//DISPLAY TIME AND DATE
const dateOutput = document.querySelector(".info__date--current");

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

exitBtn.addEventListener('click', function() {
    dashboard.replaceWith(dashboardClone);
    
    dashboard = dashboardClone;

    dashboard.classList.remove("hidden");
    dashboard.classList.add("reveal");
});
