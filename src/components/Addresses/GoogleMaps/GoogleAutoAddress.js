import Script from "next/script";
import { Col } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import { useState, useEffect } from "react";

const AddressAutoComplete = ({ setAddress }) => {
  const [script, setScript] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setScript(
        <Script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPXAPGFnljqnvU5ti6o2ozR_js7Xzbbis&libraries=places"
          onLoad={initAutoComplete}
        ></Script>
      );
    }, 500);
  }, []);

  function initAutoComplete() {
    let autocomplete;
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {
        types: ["establishment"],
        componentRestrictions: { country: ["IN"] },
        fields: ["place_id", "geometry", "name"],
      }
    );

    autocomplete.addListener("place_changed", () => {
      var place = autocomplete.getPlace();
      if (place.geometry) {
        const locality = document.getElementById("autocomplete").value;
        console.log(locality);
        setAddress(locality);
      }
      document.getElementById("autocomplete").value = " ";
    });
  }

  return (
    <div
      className="d-flex align-items-center p-1 position-relative "
      style={{
        border: "1px solid grey",
        position: "relative",
        borderRadius: "5px",
      }}
    >
      <Col style={{ borderRight: "1px solid grey", paddingRight: "5px" }}>
        <IoMdSearch size={20} />
      </Col>
      <Col>
        <input
          id="autocomplete"
          style={{ all: "unset" }}
          className="px-2"
          placeholder="Search your location"
        />
      </Col>
      {script}
    </div>
  );
};

export default AddressAutoComplete;
