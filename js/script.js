const loading = document.querySelector(".loading");
const application = document.querySelector(".application");

setTimeout(function(){
    loading.classList.add("hidden");
    loading.classList.remove("loading");
    application.classList.remove("hidden");
}, 10500);