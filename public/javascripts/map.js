var map = L.map('main_map').setView([10.9685400,-74.7813200], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*var marker = L.marker([11.023213640016005,-74.86925030613237]).addTo(map);
var marker = L.marker([11.022980,-74.869794]).addTo(map);
var marker = L.marker([11.023270, -74.869233]).addTo(map);
var marker = L.marker([11.023300, -74.869240]).addTo(map);
var marker = L.marker([10.9685460,-74.7813260]).addTo(map);*/

//url: "http://localhost:3000/api/bicicletas"

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
      
        });

    }



})
