import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div><img alt="marker" style={{ width: '80px' }} src={"http://www.roadrunnercr.com/assets/images/map-marker.png"} /></div>;

export default class MapComponent extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    constructor(props) {
        super(props);

        this.state = {
            center: this.props.center,
            zoom: this.props.zoom
        };
    }

    handleApiLoaded = (map, maps) => {
        console.log('map', this.props.setcenter);
        
        map.setCenter( this.props.setcenter )
        console.log('maps', maps);

    }

    render() {
        console.log(this.props)
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBtYLx7DcZg3e0Tz6EwU5BAiR04YAwk25I" }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
            >
            <AnyReactComponent
                lat={this.state.center.lat}
                lng={this.state.center.lng}
                text="My Marker"
            />
            </GoogleMapReact>
        );
    }
}