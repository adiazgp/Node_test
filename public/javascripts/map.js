var map = L.map('main_map').setView([10.9685400,-74.7813200], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([11.023213640016005,-74.86925030613237]).addTo(map);
