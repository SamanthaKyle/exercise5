mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtLWt5bGUiLCJhIjoiY21rZTR3NW82MDNjazNscHdvZGRoNTJlYyJ9.gXrPIIVvGXk6SEwdzrbd1g'

const map = new mapboxgl.Map({
    container: 'my-map',

    style: 'mapbox://styles/sam-kyle/cmlb9wo9h000d01qpewsvayee',
    //style: 'mapbox://styles/mapbox/standard',
    center: [-79.294541, 43.67431], 

 // starting position [lng, lat]
    zoom: 14, // starting zoom
})

map.on('load', () => {
    // this is the eventListener
    // Add a data source containing GeoJSON data

    // must add data sources here
    map.addSource('places', {
        'type': 'geojson',
        'generateId': true,
        'data': {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "story": "had my first kiss here :)"
                },
                "geometry": {
                    "coordinates": [
                        -79.29544950231555,
                        43.6665063925181
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "story": "Red Cardinals love it here!"
                },
                "geometry": {
                    "coordinates": [
                        -79.29376960288484,
                        43.67908229503047
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "story": "hidden gem for thrifting"
                },
                "geometry": {
                    "coordinates": [
                        -79.30443696426813,
                        43.669362021919454
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "story": "BOILER ROOM!!!!!"
                },
                "geometry": {
                    "coordinates": [
                        -79.31128255444673,
                        43.66501776587799
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "story": "The best place in the whole city for watching the sunset."
                },
                "geometry": {
                    "coordinates": [
                        -79.28732961641894,
                        43.66947770995037
                    ],
                    "type": "Point"
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "story": "Good to visit for Family Day!"
                },
                "geometry": {
                    "coordinates": [
                        -79.2981517126696,
                        43.67421445111728
                    ],
                    "type": "Point"
                }
            }
        ]
    }
}
);
// Add a layer showing the places.
map.addLayer({
    'id': 'places',
    'type': 'circle',
    'source': 'places',
    'paint': {
        'circle-color': '#4264fb',
        'circle-radius': 6,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
    },
    'visible': false
});

// Create the popup UI, but don't add it to the map yet.
// You only want the UI to appear once the cursor is hovering over an element.
const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.addInteraction('places-mouseenter-interaction', {
    type: 'mouseenter',
    target: { layerId: 'places' },
    handler: (e) => {
        map.getCanvas().style.cursor = 'pointer';

        // Copy the coordinates from the POI underneath the cursor
        const coordinates = e.feature.geometry.coordinates.slice();
        const description = e.feature.properties.story;

        // Populate the popup and set its coordinates based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    }
});

map.addInteraction('places-mouseleave-interaction', {
    type: 'mouseleave',
    target: { layerId: 'places' },
    handler: () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    }
});
});

