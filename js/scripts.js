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
marker = L.marker([-8.05794, -34.87935], {
    icon: redMarker,
}).addTo(map);

//L.Control

marker.bindPopup("Ginásio Pernambucano", {
    maxWidth: "none"
})


//Camada Cicloviaria

var ciclofaixa_movel_style = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65,
    "dashArray": '5,10',
    "lineJoin": 'round'
};

var ciclovia_style = {
    "color": "#ff0000",
    "weight": 5,
    "opacity": 0.65,
    "dashArray": '5,10',
    "lineJoin": 'round'
};

var ciclofaixa_style = {
    "color": "#fff500",
    "weight": 5,
    "opacity": 0.65,
    "dashArray": '5,10',
    "lineJoin": 'round'
};

var ciclorrota_style = {
    "color": "#fffb8a",
    "weight": 5,
    "opacity": 0.65,
    "dashArray": '5,10',
    "lineJoin": 'round'
};


L.control.layers({}, {
    'Ciclofaixa Movel': L.geoJson(ciclofaixa_movel, {
        style: ciclofaixa_movel_style
    }),
    'Ciclovia': L.geoJson(ciclovias, {
        style: ciclovia_style
    }),
    'Ciclofaixa': L.geoJson(ciclofaixa, {
        style: ciclofaixa_style
    }),
    'Ciclorrota': L.geoJson(ciclorrota, {
        style: ciclorrota_style
    })
}).addTo(map);








// Form
$('#submit').click(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var conteudo = $('#conteudo').val();

    var data = 'name' + name + '&email=' + email + 'conteudo' + conteudo;
    console.log(data);
});


$(document).on('click', '.navbar-collapse.in', function (e) {

    if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) {
        $(this).collapse('hide');
    }

});