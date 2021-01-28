// import React from 'react'
// import { withGoogleMap } from "react-google-maps";
//
// class Navigate extends React.Component{
//     constructor(){
//         super();
//
//     this.state = {
//         coordinates: [],
//         zoom: 8,
//     }
//     }
//
//     handleMapChange(coordinates, zoom) {
//         this.setState({ coordinates, zoom })
//     }
//
//     render() {
//         // const { coordinates, zoom } = this.state
//
//         const GettingStartedGoogleMap = withGoogleMap(props => (
//             <GoogleMap
//                 ref={props.onMapLoad}
//                 defaultZoom={3}
//                 defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//                 onClick={props.onMapClick}
//             >
//                 {props.markers.map((marker, index) => (
//                     <Marker
//                         {...marker}
//                         onRightClick={() => props.onMarkerRightClick(index)}
//                     />
//                 ))}
//             </GoogleMap>
//         ));
//         return (
//             <GettingStartedGoogleMap
//                 containerElement={
//       <div style={{ height: `100%` }} ></div>
//     }
//                 mapElement={
//       <div style={{ height: `100%` }} ></div>
//     }
//                 onMapLoad={_.noop}
//                 onMapClick={_.noop}
//                 markers={markers}
//                 onMarkerRightClick={_.noop}
//             />
//         )
//     }
// }
//
// export default Navigate;










/* global google */
import _ from "lodash";

import {
    default as React,
    Component,
} from "react";

import Helmet from "react-helmet";

import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={16}
        center={props.center}
        onClick={props.onMapClick}
        onBoundsChanged={props.onBoundsChanged}
    >
        {props.markers.map(marker => (
            <Marker
                {...marker}
                onRightClick={() => props.onMarkerRightClick(marker)}
            />
        ))}
    </GoogleMap>
));

// export default class GettingStartedExample extends Component {
//
//     state = {
//         markers: [{
//             position: {
//                 lat: 32.01121833,
//                 lng: 34.52067571,
//             },
//             key: `Israel`,
//             defaultAnimation: 1,
//         }],
//     };
//
//     handleMapLoad = this.handleMapLoad.bind(this);
//     handleMapClick = this.handleMapClick.bind(this);
//     handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
//
//     handleMapLoad(map) {
//         this._mapComponent = map;
//         if (map) {
//             console.log(map.getZoom());
//         }
//     }
//
//     /*
//      * This is called when you click on the map.
//      * Go and try click now.
//      */
//     handleMapClick(event) {
//         const nextMarkers = [
//             ...this.state.markers,
//             {
//                 position: event.latLng,
//                 defaultAnimation: 2,
//                 key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
//             },
//         ];
//         this.setState({
//             markers: nextMarkers,
//         });
//
//         if (nextMarkers.length === 3) {
//             this.props.toast(
//                 `Right click on the marker to remove it`,
//                 `Also check the code!`
//             );
//         }
//     }
//
//     handleMarkerRightClick(targetMarker) {
//         /*
//          * All you modify is data, and the view is driven by data.
//          * This is so called data-driven-development. (And yes, it's now in
//          * web front end and even with google maps API.)
//          */
//         const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
//         this.setState({
//             markers: nextMarkers,
//         });
//     }
//
//     render() {
//         return (
//             <div style={{height: `100%`}}>
//                 <Helmet
//                     title="Getting Started"
//                 />
//                 <GettingStartedGoogleMap
//                     containerElement={
//             <div style={{ height: `100%` }} ></div>
//           }
//                     mapElement={
//             <div style={{ height: `100%` }} ></div>
//           }
//                     onMapLoad={this.handleMapLoad}
//                     onMapClick={this.handleMapClick}
//                     markers={this.state.markers}
//                     onMarkerRightClick={this.handleMarkerRightClick}
//                 />
//             </div>
//         );
//     }
// }


function getLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.watchPosition(showPosition);
    } else {
        // x.innerHTML = "Geolocation is not supported by this browser.";
        alert("Geolocation is not supported by this browser.");
        return null;
    }
}
function showPosition(position) {

    // x.innerHTML = "Latitude: " + position.coords.latitude +
    //     "<br>Longitude: " + position.coords.longitude;

    // var str = "Latitude: " + position.coords.latitude +
    //     "<br>Longitude: " + position.coords.longitude;

    const places =  {
        geometry:{
            location: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        },
        name: `1232dcd`
    };


    this.handlePlacesChanged(places);
}

var Navigate = React.createClass({

    getInitialState: function() {
        return {
            center: {
                lat: 0,
                lng: 0
            },
            markers: [],
        };
    },
    componentWillMount: function() {
       //  alert(this.props.lat);
       // this.setState({
       //     lat: this.props.lat,
       //     lng: this.props.lng
       // });
    },
    reRender: function(lat, lng) {
        // alert(this.props.lat);
        const places =  {
            geometry:{
                location: {
                    lat: parseFloat(lat),
                    lng: parseFloat(lng)
                }
            },
            name: `1232dcd`
        };


        this.handlePlacesChanged(places);
    },
    handleMapLoad: function(map) {
        this._map = map;
        if (map) {
            console.log(map.getZoom());
            console.log("onMapLoad");
        }
    },
    handleBoundsChanged: function() {
        this.setState({
            bounds: this._map.getBounds(),
            center: this._map.getCenter(),
        });
    },
    findByGeoLocation: function() {

        if (navigator.geolocation) {
             navigator.geolocation.watchPosition(this.showPosition);
        } else {
            // x.innerHTML = "Geolocation is not supported by this browser.";
            alert("Geolocation is not supported by this browser.");

        }
    },
    getCoordinates: function() {

        return this.state.center;
    },
    showPosition: function(position) {

        const places =  {
            geometry:{
                location: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            },
            name: `1232dcd`
        };


        this.handlePlacesChanged(places);
    },

    /*
     * This is called when you click on the map.
     * Go and try click now.
     */
    handleMapClick: function(event) {
        const nextMarkers = [
            ...this.state.markers,
            {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
            },
        ];
        this.setState({
            markers: nextMarkers,
        });

        if (nextMarkers.length === 3) {
            this.props.toast(
                `Right click on the marker to remove it`,
                `Also check the code!`
            );
        }
    },
    handleMarkerRightClick: function(targetMarker) {
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        this.setState({
            markers: nextMarkers,
        });
    },
    handlePlacesChanged: function(e) {

        console.log("handlePlacesChanged",e);
        // const places = this._searchBox.getPlaces();
        const places = [e];

        // Add a marker for each place returned from search bar
        const markers = places.map(place => ({
            position: place.geometry.location,
            key: place.name,
        }));

        // Set markers; set map center to first search result
        const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

        this.setState({
            center: mapCenter,
            markers,
        });
    },

    render: function() {

        return (
            <div style={{height: `100%`}}>
               
                <GettingStartedGoogleMap
                    containerElement={
            <div style={{ height: `100%` }} ></div>
          }
                    mapElement={
            <div style={{ height: `100%` }} ></div>
          }
                    onMapLoad={this.handleMapLoad}
                    onMapClick={this.handleMapClick}
                    markers={this.state.markers}
                    onMarkerRightClick={this.handleMarkerRightClick}
                    bounds={this.state.bounds}
                    center={this.state.center}
                />
            </div>
        );
    }
});


export default Navigate;