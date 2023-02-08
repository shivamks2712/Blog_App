import React, { useState, useEffect } from "react";

import MapPicker from "react-google-map-picker";

const DefaultZoom = 16;
const GooglePlaceInput = ({ location, setLocation }) => {
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
    console.log(lat, lng);
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  return (
    <div id="map" className="googleMapLocator m-2">
      <MapPicker
        defaultLocation={location}
        zoom={zoom}
        mapTypeId="roadmap"
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyBPXAPGFnljqnvU5ti6o2ozR_js7Xzbbis"
      />
    </div>
  );
};

export default GooglePlaceInput;
