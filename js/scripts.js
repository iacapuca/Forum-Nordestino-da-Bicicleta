// Smooth Scroll to internal links

$('.smooth-scroll').smoothScroll({
    speed: 800,
    offset: -68
});

// Tabs

//Map
// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([-8.05794, -34.87935], 18);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.Control.geocoder().addTo(map);
var bicicletaIcon = L.icon({
    iconUrl: 'ms-icon-310x310.png',

    iconSize: [40, 40], // size of the icon
    iconAnchor: [01, 70], // point of the icon which will correspond to marker's location


});

L.Routing.control({
    waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);

L.marker([-8.05794, -34.87935], {
    icon: bicicletaIcon
}).addTo(map);

// Form
$('#submit').click(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var conteudo = $('#conteudo').val();

    var data = 'name' + name + '&email=' + email + 'conteudo' + conteudo;
    console.log(data);
});


$(document).on('click','.navbar-collapse.in',function(e) {

    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
        $(this).collapse('hide');
    }

});
