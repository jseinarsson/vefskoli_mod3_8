const loading = document.querySelector(".loading");
const dashboard = document.querySelector(".dashboard");

/* setTimeout(function(){
    loading.classList.add("hidden");
    loading.classList.remove("loading");
    dashboard.classList.remove("hidden");
    dashboard.classList.add("reveal");
}, 10500); */

const nameBtn = document.querySelector(".name__button");
const nameInput = document.querySelector(".name__textbox");
const nameOutput = document.querySelector(".name__output");

nameBtn.addEventListener('click', function(){
    // Create input value text node.
    const  nameInputContent = document.createTextNode(nameInput.value);
    // Add text node to <span> with class ".name__output" (replacing existing node)
    nameOutput.replaceChild(nameInputContent, nameOutput.lastChild);
});