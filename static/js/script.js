const destinations = [
    // Europe
    {
        city: "Paris",
        country: "France",
        continent: "Europe",
        climate: "Temperate",
        budget: 180,
        bestTime: "April – June",
        description: "Paris is known for its iconic landmarks, world-class museums, charming cafés, and romantic atmosphere.",
        image: "paris.avif"
    },

    {
        city: "Rome",
        country: "Italy",
        continent: "Europe",
        climate: "Warm",
        budget: 140,
        bestTime: "April – June",
        description: "Rome offers a unique blend of ancient history, beautiful architecture, and authentic Italian cuisine.",
        image: "rome.avif"
    },

    {
        city: "Barcelona",
        country: "Spain",
        continent: "Europe",
        climate: "Warm",
        budget: 150,
        bestTime: "May – September",
        description: "Barcelona combines Mediterranean beaches, impressive architecture, and a vibrant cultural scene.",
        image: "barcelona.avif"
    },

    {
        city: "Oslo",
        country: "Norway",
        continent: "Europe",
        climate: "Cold",
        budget: 240,
        bestTime: "June – August",
        description: "Oslo is surrounded by fjords and forests, making it a perfect destination for outdoor enthusiasts.",
        image: "oslo.avif"
    },

    // Asia
    {
        city: "Tokyo",
        country: "Japan",
        continent: "Asia",
        climate: "Temperate",
        budget: 170,
        bestTime: "March – May",
        description: "Tokyo blends futuristic technology with centuries-old traditions, offering unforgettable cultural experiences.",
        image: "tokyo.avif"
    },

    {
        city: "Seoul",
        country: "South Korea",
        continent: "Asia",
        climate: "Temperate",
        budget: 130,
        bestTime: "April – May",
        description: "Seoul is famous for its palaces, shopping districts, street food, and modern skyline.",
        image: "seoul.avif"
    },

    {
        city: "Bangkok",
        country: "Thailand",
        continent: "Asia",
        climate: "Tropical",
        budget: 70,
        bestTime: "November – February",
        description: "Bangkok is a lively city known for its temples, floating markets, and vibrant nightlife.",
        image: "bangkok.avif"
    },

    {
        city: "Bali",
        country: "Indonesia",
        continent: "Asia",
        climate: "Tropical",
        budget: 65,
        bestTime: "April – October",
        description: "Bali is famous for tropical beaches, rice terraces, temples, and relaxing resorts.",
        image: "bali.avif"
    },

    // North America
    {
        city: "New York City",
        country: "USA",
        continent: "North America",
        climate: "Temperate",
        budget: 260,
        bestTime: "April – June",
        description: "New York City is home to world-famous landmarks, Broadway shows, museums, and diverse neighborhoods.",
        image: "new-york.avif"
    },

    {
        city: "Vancouver",
        country: "Canada",
        continent: "North America",
        climate: "Temperate",
        budget: 180,
        bestTime: "June – September",
        description: "Vancouver offers beautiful mountains, beaches, and a perfect mix of nature and city life.",
        image: "vancouver.avif"
    },

    {
        city: "Cancun",
        country: "Mexico",
        continent: "North America",
        climate: "Tropical",
        budget: 110,
        bestTime: "December – April",
        description: "Cancun is known for its white-sand beaches, turquoise water, and luxury resorts.",
        image: "cancun.avif"
    },

    {
        city: "San Jose",
        country: "Costa Rica",
        continent: "North America",
        climate: "Tropical",
        budget: 95,
        bestTime: "December – April",
        description: "San José is the gateway to Costa Rica's rainforests, volcanoes, coffee plantations, and rich biodiversity.",
        image: "san-jose.avif"
    },

    // South America
    {
        city: "Rio de Janeiro",
        country: "Brazil",
        continent: "South America",
        climate: "Tropical",
        budget: 90,
        bestTime: "December – March",
        description: "Rio de Janeiro is famous for its beaches, Carnival, and breathtaking mountain views.",
        image: "rio.avif"
    },

    {
        city: "Buenos Aires",
        country: "Argentina",
        continent: "South America",
        climate: "Temperate",
        budget: 85,
        bestTime: "March – May",
        description: "Buenos Aires is known for tango, European architecture, and vibrant nightlife.",
        image: "buenos-aires.avif"
    },

    {
        city: "Cusco",
        country: "Peru",
        continent: "South America",
        climate: "Temperate",
        budget: 80,
        bestTime: "May – September",
        description: "Cusco is the gateway to Machu Picchu and one of South America's most historic cities.",
        image: "cusco.avif"
    },

    {
        city: "Santiago",
        country: "Chile",
        continent: "South America",
        climate: "Temperate",
        budget: 120,
        bestTime: "September – November",
        description: "Santiago combines modern city life with easy access to the Andes Mountains and vineyards.",
        image: "santiago.avif"
    },

    // Africa
    {
        city: "Marrakech",
        country: "Morocco",
        continent: "Africa",
        climate: "Warm",
        budget: 75,
        bestTime: "March – May",
        description: "Marrakech is famous for colorful markets, historic palaces, and traditional Moroccan culture.",
        image: "marrakech.avif"
    },

    {
        city: "Cairo",
        country: "Egypt",
        continent: "Africa",
        climate: "Warm",
        budget: 65,
        bestTime: "October – April",
        description: "Cairo is home to the Great Pyramids of Giza and one of the richest histories in the world.",
        image: "cairo.avif"
    },

    {
        city: "Cape Town",
        country: "South Africa",
        continent: "Africa",
        climate: "Warm",
        budget: 100,
        bestTime: "November – March",
        description: "Cape Town offers stunning coastlines, Table Mountain, and incredible wildlife experiences.",
        image: "cape-town.avif"
    },

    {
        city: "Zanzibar",
        country: "Tanzania",
        continent: "Africa",
        climate: "Tropical",
        budget: 110,
        bestTime: "June – October",
        description: "Zanzibar is known for crystal-clear waters, white-sand beaches, and rich Swahili culture.",
        image: "zanzibar.avif"
    },

    // Oceania
    {
        city: "Sydney",
        country: "Australia",
        continent: "Oceania",
        climate: "Warm",
        budget: 220,
        bestTime: "September – November",
        description: "Sydney is famous for its iconic Opera House, beautiful beaches, and relaxed lifestyle.",
        image: "sydney.avif"
    },

    {
        city: "Queenstown",
        country: "New Zealand",
        continent: "Oceania",
        climate: "Temperate",
        budget: 210,
        bestTime: "December – February",
        description: "Queenstown is considered the adventure capital of the world, offering skiing, hiking, and breathtaking scenery.",
        image: "queenstown.avif"
    },

    {
        city: "Nadi",
        country: "Fiji",
        continent: "Oceania",
        climate: "Tropical",
        budget: 170,
        bestTime: "May – October",
        description: "Fiji is an island paradise with coral reefs, crystal-clear lagoons, and luxurious resorts.",
        image: "nadi.avif"
    },

    {
        city: "Apia",
        country: "Samoa",
        continent: "Oceania",
        climate: "Tropical",
        budget: 140,
        bestTime: "May – October",
        description: "Apia is a peaceful island destination known for waterfalls, beaches, and authentic Polynesian culture.",
        image: "apia.avif"
    }
];

const findButton = document.getElementById("find-btn");

const filters = document.getElementById("filters");
const loading = document.getElementById("loading");
const destination = document.getElementById("destination");
const attractions = document.getElementById("attractions");

const cityCountry = document.getElementById("city-country");
const bestTime = document.getElementById("best-time");
const continentName = document.getElementById("continent-name");
const climateName = document.getElementById("climate-name");
const budgetPrice = document.getElementById("budget-price");
const description = document.getElementById("description");
const destinationPhoto = document.getElementById("destination-photo");

const continent = document.getElementById("continent");
const budget = document.getElementById("budget");
const climate = document.getElementById("climate");

findButton.addEventListener("click", function () {

    filters.classList.add("hidden");
    loading.classList.remove("hidden");

    const selectedContinent = continent.value;
    const selectedBudget = budget.value;
    const selectedClimate = climate.value;

    console.log(selectedContinent);
    console.log(selectedBudget);
    console.log(selectedClimate);

    const matchingDestinations = destinations.filter(function (place) {

        let budgetMatches = false;

        if (selectedBudget === "any") {
            budgetMatches = true;
        }
        else if (selectedBudget === "Under $100/day") {
            budgetMatches = place.budget < 100;
        }
        else if (selectedBudget === "$100–150/day") {
            budgetMatches = place.budget >= 100 && place.budget <= 150;
        }
        else if (selectedBudget === "Over $150/day") {
            budgetMatches = place.budget > 150;
        }

        return (

            (selectedContinent === "any" ||
            place.continent === selectedContinent)

            &&

            (selectedClimate === "any" ||
            place.climate === selectedClimate)

            &&

            budgetMatches

        );

    });

    console.log(matchingDestinations);

    if (matchingDestinations.length === 0) {
        alert("No destinations match your filters.");
        return;
    }
    const randomIndex = Math.floor(Math.random() * matchingDestinations.length);

    const randomDestination = matchingDestinations[randomIndex];
    console.log(randomDestination);

    setTimeout(function () {

        loading.classList.add("hidden");

        cityCountry.textContent =
            `${randomDestination.city}, ${randomDestination.country}`;

        bestTime.textContent = randomDestination.bestTime;
        continentName.textContent = randomDestination.continent;
        climateName.textContent = randomDestination.climate;
        budgetPrice.textContent = `$${randomDestination.budget}/day`;
        description.textContent = randomDestination.description;

        destinationPhoto.src =
            "/static/images/" + randomDestination.image;

        destination.classList.remove("hidden");
        attractions.classList.remove("hidden");

    }, 1000);

});

