import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import Container from 'react-bootstrap/Container';
import "./map.css";

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = "pk.eyJ1IjoiZXNjb2ZyZXNjbyIsImEiOiJjanIybzM1ZzUwMm56NDNyMnE2OHo4ZjJkIn0.m58inJeAA0EUbAR9zUYHGA";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    const geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
      placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
      bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
      proximity: {
        longitude: -122.25948,
        latitude: 37.87221
      } // Coordinates of UC Berkeley
    });

    // Add the geocoder to the map
    map.addControl(geocoder);

    // After the map style has loaded on the page,
    // add a source layer and default styling for a single point
    map.on('load', () => {
      map.addSource('single-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      map.addLayer({
        id: 'point',
        source: 'single-point',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#448ee4'
        }
      });

      // Listen for the `result` event from the Geocoder
      // `result` event is triggered when a user makes a selection
      // Add a marker at the result's coordinates
      geocoder.on('result', (ev) => {
        map.getSource('single-point').setData(ev.result.geometry);
      });
    });

    // Update state when the map moves
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });


  }

  render() {
    return (
      <Container id="the-map-box">
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </Container>
    );
  }
}
