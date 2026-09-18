var vectorSource = new ol.source.Vector({
    url: 'location.kml',
    format: new ol.format.KML({
        extractStyles: true
    })
});

var vectorLayer = new ol.layer.Vector({
    source: vectorSource
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        vectorLayer
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([24.753, 59.437]),
        zoom: 12
    })
});

vectorSource.once('change', function() {
    if (vectorSource.getState() === 'ready') {
        var extent = vectorSource.getExtent();
        map.getView().fit(extent, { padding: [50, 50, 50, 50] });
    }
});

map.addControl(new ol.control.FullScreen());

var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});
map.addControl(mousePositionControl);