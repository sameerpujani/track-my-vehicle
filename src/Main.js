import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import MapComponent from './MapComponent';

export default class Main extends Component {
state = {
    vehicles: [
      { id: 1, title: 'Mercedes truck', sub: 'UK07 0112', center: { lat: 59.95, lng: 30.33 }, inbox: 4, color: 'orange' },
      { id: 2, title: 'WagonR 2978', sub: '', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'yellow' },
      { id: 3, title: 'UP80 CJ 70 8814', sub: 'UK07 0112', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'red' },
      { id: 4, title: 'WagonR 3078', sub: 'UK07 0112', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'pink' },
      { id: 5, title: 'Mercedes truck', sub: 'UK07 1234', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'pink' },
      { id: 6, title: 'Mercedes truck', sub: 'UK07 0218', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'pink' },
      { id: 7, title: 'UP80 cd 8080', sub: '', center: { lat: 59.95, lng: 30.33 }, inbox: 0, color: 'red' },
      { id: 8, title: 'UP80 cd 8080 ', sub: '', center: { lat: 59.95, lng: 30.33 }, inbox: 1, color: 'blue' }
    ],
    selectedVehicle: {
      center: {
        lat: 31.1471,
        lng: 75.3412
      }
    }
  }

  handleClick = (event) => {

    let lat = event.currentTarget.dataset.lat;
    let lng = event.currentTarget.dataset.lng;

    this.setState({
      selectedVehicle: {
        center: {
          lat,
          lng
        }
      }
    });
  }

  render() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
          <div className="ui bottom attached segment pushable">
            <div className="ui visible left vertical sidebar menu">
              
              <div className=" active ui fluid category search item">
                <div className="ui icon input">
                  <input className="prompt" type="text" placeholder="Search" />
                  <i className="search icon"></i>
                </div>
              </div>
              <div class="list-style ">
              {this.state.vehicles.map((veh, index) => {
                return (
                  <Link
                    style={{color: veh.color}}
                    key={veh.id}
                    to={`/track/${veh.id}`}
                    className="item"
                    data-id={veh.id}
                    data-lat={veh.center.lat}
                    data-lng={veh.center.lng}
                    onClick={this.handleClick}
                  >
                    <span style={{color: 'rgba(0,0,0,.87)'}}>{veh.title}</span>
                    <span style={{color: 'rgba(0,0,0,.5)'}}>{veh.sub ? ` ${veh.sub}` : ''}</span>
                    {veh.inbox ? <div className={`ui ${veh.color} tiny label`}>{veh.inbox}</div> : ''}
                  </Link>
                );
              })}
              </div>
            </div>
              <MapComponent
                  zoom={11}
                  setcenter={this.state.selectedVehicle.center}
              />
              dshflk
          </div>
        </div>
    );
  }
}