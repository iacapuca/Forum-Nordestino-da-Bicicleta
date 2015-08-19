// Smooth Scroll to internal links

$('.smooth-scroll').smoothScroll({
    speed: 800,
    offset: -68
});

// Tabs

//Map
// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([-8.05794, -34.87935], 16);
var Hydda_Full = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});


// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
 var redMarker = L.ExtraMarkers.icon({
    icon: 'fa-bicycle',
    markerColor: 'red',
    shape: 'square',
    prefix: 'fa',
  });

//L.marker([-8.05794, -34.87935], {}).addTo(map);
L.marker([-8.05794, -34.87935], {icon: redMarker,}).addTo(map);

//L.Control

//Camada Cicloviaria

L.control.layers({},{
    'Ciclovia': L.geoJson(ciclovias),
    'Ciclofaixa': L.geoJson(ciclofaixas)
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
