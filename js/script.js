const loading = document.querySelector(".loading");
const application = document.querySelector(".application");

setTimeout(toggleHidden(loading, application), 95000);

function toggleHidden(hide, reveal) {
    hide.classList.add("hidden");
    reveal.classList.remove("hidden");
}