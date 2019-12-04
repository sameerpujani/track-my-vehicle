import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapComponent from './MapComponent';

export default class Main extends Component {
state = {
    vehicles: [
      { id: 1, title: 'Mercedes truck', number: 'UK07 0112', center: { lat: 59.95, lng: 30.33 }, inbox: 4, color: 'orange' },
      { id: 2, title: 'WagonR 2978', number: '', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'yellow' },
      { id: 3, title: 'Mercedes truck', number: 'UK07 0112', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'red' },
      { id: 4, title: 'Mercedes truck', number: 'UK07 0112', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'pink' },
      { id: 5, title: 'Mercedes truck', number: 'UK07 0112', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'pink' },
      { id: 6, title: 'Mercedes truck', number: 'UK07 0112', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'pink' },
      { id: 7, title: 'Mercedes truck', number: 'UK07 0112', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'red' },
      { id: 8, title: 'Mercedes truck', number: 'UK07 0112', center: { lat: 59.95, lng: 30.33 }, inbox: 1, color: 'blue' }
    ],
    selectedVehicle: {
      center: {
        lat: 31.1471,
        lng: 75.3412
      }
    }
  }

  handleClick = (event) => {
    // event.preventDefault();

    let lat = event.currentTarget.dataset.lat;
    let lng = event.currentTarget.dataset.lng;

    this.setState({
      selectedVehicle: {
        center: {
          lat,
          lng
        }
      }
    })
    console.log('lat', lat);
    console.log('lng', lng);
    console.log('call0', event.detail)
  }

  render() {
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <MapComponent
                zoom={11}
                setcenter={this.state.selectedVehicle.center}
            />
            <div className="ui left fixed vertical menu">
                <div className="item">
                    <img className="ui mini image" src={""} />
                </div>
                <Link to="/track/1" className="active teal item" data-id={this.state.vehicles[0].id} data-lat={12.9716} data-lng={77.5946} onClick={this.handleClick}>
                    Inbox
                    <div className="ui teal tiny label">1</div>
                </Link>
                <Link to="/track/2" className="item" data-lat={31.1471} data-lng={75.3412} onClick={this.handleClick}>Testimonials</Link>
                <Link to="/track/3" className="item" data-lat={37.0902} data-lng={95.7129} onClick={this.handleClick}>Sign-in</Link>
            </div>
        </div>
    );
  }
}