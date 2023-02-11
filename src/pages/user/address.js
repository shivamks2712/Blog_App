import MapView from "../../components/Addresses/GoogleMaps/MapView";
import LocatinBox from "../../components/Addresses/LocationBox";
import { Fragment, useState, useEffect } from "react";
import { HeaderOne } from "../../components/Header";
import { GetGeoCode } from "../../components/Addresses/GoogleMaps/GeoCodeFunction";
const Address = () => {
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState({
    lat: 12.99835602,
    lng: 77.01502627,
  });
  useEffect(() => {
    GetGeoCode({ address, setCoords });
  }, [address]);

  return (
    <Fragment>
      <HeaderOne />
      <div className="addressContainer d-flex align-items-center justify-content-around my-5">
        <MapView coords={coords} setAddress={setAddress} />
        <LocatinBox
          setCoords={setCoords}
          address={address}
          setAddress={setAddress}
          className="locationBox "
        />
      </div>
    </Fragment>
  );
};

export default Address;
