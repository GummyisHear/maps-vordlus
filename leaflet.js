var map = L.map('map').setView([59.437, 24.753], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var kmlLayer = omnivore.kml('location.kml')
    .on('ready', function() {
        map.fitBounds(kmlLayer.getBounds());
    })
    .addTo(map);

// koordinaadid alert
map.on('click', function(e) {
    alert("Koordinaadid: " + e.latlng.lat.toFixed(5) + ", " + e.latlng.lng.toFixed(5));
});

// mõõtkava
L.control.scale().addTo(map);