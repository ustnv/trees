import React, { PropTypes, Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const MAP_ID = 'map';


const getMarkerOptions = (tree) => {
    // TODO: uncomment this after color in data
    // for example see http://leafletjs.com/reference-1.0.2.html#circlemarker
    return {
        stroke: false,
        color: tree.color,
        fillOpacity: 0.5,
        radius: tree.diameter * 10
    }
};


export default class Map extends Component {

    constructor(props) {
        super(props);
        this.map = null;
        this.layer = null;

        this.handleSelect = (tree) => {
            this.props.onSelectTree(tree);
        }
    }

    componentDidMount() {
        this.initLeaflet();
        this.drawLayer(this.props.trees);
    }

    shouldComponentUpdate() {
        return false;
    }

    drawLayer(trees) {
        if (this.layer) {
            this.layer.clearLayers();
        }
        if (trees.length === 0) {
            return;
        }
        this.layer = new L.FeatureGroup();
        trees.forEach(tree => this.layer.addLayer(
            new L.circleMarker([tree.longitude, tree.latitude], getMarkerOptions(tree)).on('click', () => this.handleSelect(tree))
        ));

        this.layer.addTo(this.map);
    }

    initLeaflet() {
        L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.2/images/';
        const map = L.map(MAP_ID, {zoomControl: false});
        const osmUrl = 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamltYm9yb2JpbiIsImEiOiJ3WnBLYkFBIn0.0IOOPbg1m1o5Pg5ErUGd9g';
        const osm = new L.TileLayer(
            osmUrl, {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }
        );

        L.control.zoom({
            position: 'topright'
        }).addTo(map);

        map.setView(new L.LatLng(53.9, 27.5), 12);
        map.addLayer(osm);
        map.scrollWheelZoom.disable();

        this.map = map;
    }

    render() {
        return <div id={MAP_ID} />;
    }

}


Map.propTypes = {
    trees: PropTypes.array.isRequired,
    onSelectTree: PropTypes.func.isRequired
};
