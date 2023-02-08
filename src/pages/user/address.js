import GooglePlaceInput from "../../components/Addresses/GoogleMaps/GooglePlacesInput";
import LocatinBox from "../../components/Addresses/LocationBox";
import { Fragment, useState } from "react";
import { HeaderOne } from "../../components/Header";
const Address = () => {
  const [location, setLocation] = useState({ lng: 106, lat: 10 });
  return (
    <Fragment>
      <HeaderOne />
      <div className="addressContainer d-flex align-items-center justify-content-around my-5">
        <GooglePlaceInput location={location} setLocation={setLocation} />
        <LocatinBox setLocation={setLocation} className="locationBox " />
      </div>
    </Fragment>
  );
};

export default Address;
