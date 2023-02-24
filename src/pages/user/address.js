import MapView from "../../components/Addresses/GoogleMaps/MapView";
import LocatinBox from "../../components/Addresses/LocationBox";
import { Fragment, useState, useEffect } from "react";
import { HeaderOne } from "../../components/Header";
import {
  GetGeoCode,
  GetAddressFromCordinates,
} from "../../components/Addresses/GoogleMaps/GeoCodeFunction";
const Address = () => {
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({
    lat: 12.99835602,
    lng: 77.01502627,
  });
  useEffect(() => {
    GetGeoCode({ address, setCoords });
  }, [address]);

  // Fetching Current Location
  function getLocation() {
    if (!navigator.geolocation) {
      console.log("Geolocation API not supported by this browser.");
    } else {
      console.log("Checking location...");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  function error() {
    console.log("Geolocation error!");
  }

  function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    setCoords({ lat: lat, lng: lng });
    GetAddressFromCordinates({ lat, lng, setAddress });
  }

  return (
    <Fragment>
      <HeaderOne />
      <div className="addressContainer d-flex align-items-center justify-content-around my-5 mx-2">
        <MapView
          coords={coords}
          setCoords={setCoords}
          setAddress={setAddress}
        />
        <LocatinBox
          coords={coords}
          getLocation={getLocation}
          address={address}
          setAddress={setAddress}
          className="locationBox "
        />
      </div>
    </Fragment>
  );
};

export default Address;
