import React, { useState } from "react";
import { GetAddressFromCordinates } from "./GeoCodeFunction";

import MapPicker from "react-google-map-picker";

const DefaultZoom = 15;

const MapView = ({ coords, setAddress }) => {
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
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
