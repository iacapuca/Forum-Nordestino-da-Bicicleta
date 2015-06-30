// Smooth Scroll to internal links

$('.smooth-scroll').smoothScroll({
    speed: 800,
    offset: -68
});

//Easy Tabs
$('#tab-container').easytabs({
    animate: true,
    animationSpeed: 1000,
});

//Map
// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([-8.05794, -34.87935], 18);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var bicicletaIcon = L.icon({
    iconUrl: 'ms-icon-310x310.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [01, 70], // point of the icon which will correspond to marker's location


});

L.marker([-8.05794, -34.87935], {icon: bicicletaIcon}).addTo(map);
