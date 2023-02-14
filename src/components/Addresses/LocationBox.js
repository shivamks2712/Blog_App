import { IoMdLocate } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import AddressAutoComplete from "./GoogleMaps/GoogleAutoAddress";
import { useEffect, useState } from "react";

const LocatinBox = ({ setAddress, getLocation, address }) => {
  const [fullAddress, setFullAddress] = useState("none");
  useEffect(() => {
    document.getElementById("street").value = address;
    setFullAddress("none");
  }, [address]);

  return (
    <div className="locationBox  m-3 px-3 py-3">
      <b className="text-black ">Select a location</b>
      <button
        style={{ all: "unset", padding: "10px" }}
        onClick={() => getLocation()}
        className="mt-2 text-black"
      >
        <IoMdLocate size={20} /> Use current location
      </button>
      <AddressAutoComplete getLocation={getLocation} setAddress={setAddress} />

      <hr />
      <div className={`d-${fullAddress}`}>
        <div className="d-flex mx-3 justify-content-evenly ">
          {["Home", "Office", "Hotel", "other"].map((e, i) => (
            <button id={`addresType-${i}`} key={e} style={addressType}>
              {e}
            </button>
          ))}
        </div>
        {fullAdress}
      </div>
      <p
        className={`fw-semibold text-black d-${
          fullAddress === "none" ? "block" : "none"
        }`}
        style={{ fontSize: "11px" }}
      >
        <MdLocationOn className="mx-2" size={20} />
        <span>
          {address === ""
            ? "Getting your currrent location"
            : address.substring(0, 30) + "..."}
        </span>
      </p>
      <center>
        <button
          style={saveButtonStyle}
          onClick={() => {
            if (address !== "") setFullAddress("block");
          }}
          className={`d-${fullAddress === "none" ? "block" : "none"}`}
        >
          {fullAddress === "none" ? "Enter Complete Address" : "Save Address"}{" "}
        </button>
      </center>
      <hr />
    </div>
  );
};

//   Styles
const addressType = {
  border: "1px solid grey",
  fontSize: "12px",
  padding: "4px 8px",
  marginLeft: "3px",
  marginRight: "3px",
  color: "black",
  borderRadius: "5px",
  background: "none",
};
const saveButtonStyle = {
  all: "unset",
  marginTop: "10px",
  padding: "10px 25px",
  borderRadius: "6px",
  fontWeight: "500",
  color: "white",
  fontSize: "13px",
  backgroundColor: "green",
};

// Address Form
const fullAdress = (
  <form className="locationBoxAddressForm m-2">
    <label for="flatNo">Flat,HouseNo,Floor,Tower</label>
    <input required type="text" name="flatNo" id="flatNo" />
    <label for="street">Street,Society,Landmark</label>
    <input required type="text" name="street" id="street" />
    <button type="submit" style={saveButtonStyle}>
      Save Address
    </button>
  </form>
);

export default LocatinBox;
