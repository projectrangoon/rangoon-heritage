import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
console.log(process.env);

class App extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 16.77362371972506,
      longitude: 96.16739432250611,
      zoom: 15,
      bearing: 1,
      minZoom: 10,
    }
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
      </MapGL>  
    );
  }
}

export default App;
