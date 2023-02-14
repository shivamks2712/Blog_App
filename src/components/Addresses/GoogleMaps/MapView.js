import React, { useState, useEffect } from "react";
import { GetAddressFromCordinates } from "./GeoCodeFunction";

import MapPicker from "react-google-map-picker";

const DefaultZoom = 16;

const MapView = ({ setCoords, coords, setAddress }) => {
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setCoords({ lat, lng });
    GetAddressFromCordinates({ lat, lng, setAddress });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  return (
    <MapPicker
      className="mapViewMapPicker "
      defaultLocation={coords}
      zoom={zoom}
      mapTypeId="roadmap"
      style={{ height: "700px" }}
      onChangeLocation={handleChangeLocation}
      onChangeZoom={handleChangeZoom}
      apiKey="AIzaSyADS_LFRmfMFMFH3SlaN7rJmSr3iCijs20"
    />
  );
};

export default MapView;
