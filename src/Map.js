import React, { PropTypes, Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const MAP_ID = 'map';


export default class Map extends Component {

    constructor(props) {
        super(props);
        this.map = null;
        this.layer = null;
    }

    componentDidMount() {
        this.initLeaflet();
    }

     shouldComponentUpdate() {
        return false;
    }

    initLeaflet() {
        L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.2/images/';
        const map = L.map(MAP_ID, {zoomControl: false});
        const osmUrl = '//{s}.tile.osm.org/{z}/{x}/{y}.png';
        const osm = new L.TileLayer(
            osmUrl, {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }
        );

        L.control.zoom({
            position: 'topright'
        }).addTo(map);

        map.setView(new L.LatLng(64, 83), 3);
        map.addLayer(osm);

        this.map = map;
    }

    render() {
        return <div id={MAP_ID} />;
    }

}


Map.propTypes = {
    organizations: PropTypes.array,
    onMapReady: PropTypes.func
};
