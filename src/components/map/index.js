import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export const MapContainer = (props) => {
  const onMarkerClick = (e) => {
    console.log(e)
  }
  return (
    <Map 
      google={props.google} 
      zoom={14}
      initialCenter={{
          lat: 19.3650317,
          lng: -99.1798037
      }}

    >

      <Marker onClick={onMarkerClick}
              name={'Current location'} />
    </Map>
  );
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBrN1lneWvaBqK4d8ZCqV6vPBT-NM0MDNA')
})(MapContainer)