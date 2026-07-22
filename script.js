// ===============================
// Dark Mode
// ===============================

function toggleTheme() {
    document.body.classList.toggle("dark");
}

// ===============================
// Search Places
// ===============================

function searchPlace() {

    let input = document.getElementById("search").value.toLowerCase();

    let places = document.querySelectorAll(".place-item");

    places.forEach(function (place) {

        let text = place.innerText.toLowerCase();

        if (text.includes(input)) {
            place.style.display = "block";
        } else {
            place.style.display = "none";
        }

    });

}

// ===============================
// Weather Guide
// ===============================

function showWeather(season) {

    const weather = document.getElementById("weather");

    if (season == "spring") {

        weather.innerHTML =
            "🌸 Spring (March-May)<br><br>Best season for trekking and sightseeing.";

    }

    else if (season == "summer") {

        weather.innerHTML =
            "☀️ Summer (June-August)<br><br>Warm weather with occasional rainfall.";

    }

    else if (season == "autumn") {

        weather.innerHTML =
            "🍁 Autumn (September-November)<br><br>The best season to visit Nepal with clear mountain views.";

    }

    else {

        weather.innerHTML =
            "❄️ Winter (December-February)<br><br>Cold weather. Carry warm clothes.";

    }

}

// ===============================
// Travel Tips
// ===============================

const tips = [

    "🏔️ Carry warm clothes while trekking.",

    "💧 Drink bottled or purified water.",

    "🙏 Respect local culture and traditions.",

    "🥾 Wear comfortable trekking shoes.",

    "📷 Don't forget your camera.",

    "💵 Carry some cash in rural areas.",

    "🗺️ Hire a guide for difficult trekking routes."

];

function showTip() {

    let random = Math.floor(Math.random() * tips.length);

    document.getElementById("tip").innerHTML = tips[random];

}

// ===============================
// Welcome Message
// ===============================

window.onload = function () {

    alert("🇳🇵 Welcome to Explore Nepal!");

}

// ===============================
// Leaflet Map
// ===============================

var map = L.map('map').setView([28.3949, 84.1240], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; OpenStreetMap'

}).addTo(map);

// Kathmandu

L.marker([27.7172, 85.3240])

    .addTo(map)

    .bindPopup("<b>Kathmandu</b><br>Capital City");

// Pokhara

L.marker([28.2096, 83.9856])

    .addTo(map)

    .bindPopup("<b>Pokhara</b><br>City of Lakes");

// Lumbini

L.marker([27.4833, 83.2767])

    .addTo(map)

    .bindPopup("<b>Lumbini</b><br>Birthplace of Lord Buddha");

// Muktinath

L.marker([28.8167, 83.8667])

    .addTo(map)

    .bindPopup("<b>Muktinath</b><br>Holy Pilgrimage Site");

// Everest

L.marker([27.9881, 86.9250])

    .addTo(map)

    .bindPopup("<b>Mount Everest</b><br>Highest Mountain in the World");
const sliderImages = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg"
];

let currentImage = 0;

function changeImage() {
    currentImage++;

    if (currentImage >= sliderImages.length) {
        currentImage = 0;
    }

    document.getElementById("sliderImage").src = sliderImages[currentImage];
}

setInterval(changeImage, 3000);
// ===============================
// Nepal Interactive Map
// ===============================

let map = L.map('map').setView([28.3949, 84.1240], 7);


L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© OpenStreetMap'
    }
).addTo(map);


// Kathmandu

L.marker([27.7172, 85.3240])
    .addTo(map)
    .bindPopup(
        "<h3>📍 Kathmandu</h3><p>Capital city of Nepal</p>"
    );


// Pokhara

L.marker([28.2096, 83.9856])
    .addTo(map)
    .bindPopup(
        "<h3>📍 Pokhara</h3><p>Beautiful city of lakes</p>"
    );


// Lumbini

L.marker([27.4833, 83.2767])
    .addTo(map)
    .bindPopup(
        "<h3>📍 Lumbini</h3><p>Birthplace of Buddha</p>"
    );


// Everest

L.marker([27.9881, 86.9250])
    .addTo(map)
    .bindPopup(
        "<h3>🏔️ Mount Everest</h3><p>Highest mountain in the world</p>"
    );


// Muktinath

L.marker([28.8167, 83.8667])
    .addTo(map)
    .bindPopup(
        "<h3>📍 Muktinath</h3><p>Holy pilgrimage place</p>"
    );