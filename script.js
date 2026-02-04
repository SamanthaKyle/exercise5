mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtLWt5bGUiLCJhIjoiY21rZTR3NW82MDNjazNscHdvZGRoNTJlYyJ9.gXrPIIVvGXk6SEwdzrbd1g'

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/sam-kyle/cmkyjc7qx00bk01qu5wel21gt',
    //style: 'mapbox://styles/mapbox/standard',
    center: [-79.39, 43.66], // starting position [lng, lat]
    zoom: 12, // starting zoom
})

map.on('load', () => {
    // this is the eventListener
    // Add a data source containing GeoJSON data

    // must add data sources here
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });
    // Visualize data layer on map
    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });

    map.addSource('buildings-data', {
        type: 'geojson',
        //data: 'C:\Users\saman\Downloads\Github\GGR472\exercise5\wk5-data\buildings.geojson' // Your URL to your buildings.geojson file
        // data: 'https://SamanthaKyle.github.io/exercise5/wk5-data/buildings.geojson'
        //data: 'https://raw.githubusercontent.com/SamanthaKyle/exercise5/main/wk5-data/buildings.geojson'
        //data: 'https://github.com/SamanthaKyle/exercise5/blob/6b5994d932f05a96f3fc345d500828a75371924e/wk5-data/buildings.geojson'
        data: 'https://raw.githubusercontent.com/SamanthaKyle/exercise5/refs/heads/master/wk5-data/buildings.geojson'
    });
    map.addLayer({
        'id': 'buildings-point',
        'type': 'circle',
        'source': 'buildings-data',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#007cbf'
        }
    });
});

