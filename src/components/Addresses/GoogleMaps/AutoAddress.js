import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import { GetGeoCode, GetAddressFromCordinates } from "./GeoCodeFunction";

export default () => {
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: "AIzaSyBPXAPGFnljqnvU5ti6o2ozR_js7Xzbbis",
    options: {
      componentRestrictions: { country: "in" },
    },
  });

  const [placeLists, setPlaceLists] = useState([]);

  useEffect(() => {
    // fetch place details for the first element in placePredictions array
    if (placePredictions.length) {
      placesService?.getDetails({
        placeId: placePredictions[0].place_id,
      });
      setPlaceLists(placePredictions);
      console.log(placeLists[0]);
    }
  }, [placePredictions]);

  return (
    <div
      className="d-flex align-items-center p-1 position-relative "
      style={{ border: "1px solid grey", borderRadius: "5px" }}
    >
      <Col style={{ borderRight: "1px solid grey", paddingRight: "5px" }}>
        <IoMdSearch size={20} />
      </Col>
      <Col>
        <input
          style={{ all: "unset", paddingLeft: "8px" }}
          placeholder="Search your location"
          onChange={(evt) => {
            if (evt.target.value.length === 0) setPlaceLists([]);
            getPlacePredictions({ input: evt.target.value });
          }}
          loading={isPlacePredictionsLoading}
        />
      </Col>

      <div
        style={{
          top: "100%",
          zIndex: 100000,
          backgroundColor: "white",
          border: "1px solid grey",
          borderRadius: "5px",
        }}
        className=" position-absolute autoAddressLocationList my-1"
      >
        {placeLists.map((item, i) => (
          <p
            className="m-2"
            key={i}
            onClick={(e) => {
              GetAddressFromCordinates({ lat: 28.736269, lng: 77.117574 });
              GetGeoCode({ address: e.target.value });
            }}
          >
            {item.description}
          </p>
        ))}
      </div>
    </div>
  );
};
