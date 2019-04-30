import React, { useState } from "react";
import { geolocated } from "react-geolocated";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyDSsEvjBQ21cDvJoGPqTxXO2S5YYwygNO4");

/**
 * Temperature component //TODO
 * @param {*} props
 */
const TempratureComponent = props => {
  const [location, setLocation] = useState({});
  const [address, setAddress] = useState({});

  function currentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          // Get address from latidude & longitude.
          Geocode.fromLatLng(position.coords).then(
            response => {
              setAddress(response.results[0].formatted_address);
              console.log("address", address);
              return <p>{address}</p>;
            },
            error => {
              console.error("error",error);
            }
          );
        },
        () => {}
      );

      return (
        <div>
          <h1>
            location:{location.lat},{location.lng}
          </h1>
        </div>
      );
    }
  }

  return (
    <div>
      {/* <h1>Temprature</h1> */}
      {/* <> */}
      {/* {!props.isGeolocationAvailable} ?{" "}
    <div>Your browser does not support Geolocation</div>:
    {!props.isGeolocationEnabled} ? <div>Geolocation is not enabled</div>:
    {props.coords} ?{" "} */}
      {currentLocation()}
      <table>
        <tbody>
          <tr>
            <td>place</td>
            {/* <td>{props.coords.place}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(TempratureComponent);
