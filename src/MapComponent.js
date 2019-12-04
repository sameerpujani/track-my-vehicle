import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div><img style={{ width: '80px' }} src={"http://www.roadrunnercr.com/assets/images/map-marker.png"} /></div>;

export default class MapComponent extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    handleApiLoaded = (map, maps) => {
        console.log('map', this.props.setcenter);
        
        map.setCenter( this.props.setcenter )
        console.log('maps', maps);

        this.googleMapRef = map
    this.googleRef = maps

        let locations = [
            {lat: -31.563910, lng: 147.154312},
            {lat: -33.718234, lng: 150.363181},
            {lat: -33.727111, lng: 150.371124}]
          let markers = locations && locations.map((location) => {
            return new this.googleRef.Marker({position: location})
          })
    }

    render() {
        console.log(this.props)
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBtYLx7DcZg3e0Tz6EwU5BAiR04YAwk25I" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
            >
            <AnyReactComponent
                lat={this.props.center.lat}
                lng={this.props.center.lng}
                text="My Marker"
            />
            </GoogleMapReact>
        );
    }
}