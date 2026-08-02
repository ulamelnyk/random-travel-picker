const findButton = document.getElementById("find-btn");

const filters = document.getElementById("filters");
const loading = document.getElementById("loading");
const destination = document.getElementById("destination");
const attractions = document.getElementById("attractions");

findButton.addEventListener("click", function () {

    // Hide filters
    filters.classList.add("hidden");

    // Show loading message
    loading.classList.remove("hidden");

    // Wait 1 second
    setTimeout(function () {

        // Hide loading message
        loading.classList.add("hidden");

        // Show destination card
        destination.classList.remove("hidden");

        // Show attractions
        attractions.classList.remove("hidden");

    }, 1000);

});