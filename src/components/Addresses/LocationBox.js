import { IoMdLocate } from "react-icons/io";
import AddressListWrapper from "./AddressListWrapper";
import AddressAutoComplete from "./GoogleMaps/GoogleAutoAddress";
import { GetAddressFromCordinates } from "./GoogleMaps/GeoCodeFunction";
import { useEffect } from "react";

const LocatinBox = ({ setAddress, setCoords, address }) => {
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
    padding: "10px 25px",
    borderRadius: "6px",
    color: "white",
    fontSize: "16px",
    backgroundColor: "green",
  };

  useEffect(() => {
    document.getElementById("street").value = address;
  }, [address]);

  // Address Form
  const fullAdress = (
    <form className="locationBoxAddressForm m-2">
      <label for="flatNo">Flat,HouseNo,Floor,Tower</label>
      <input autoFocus type="text" name="flatNo" id="flatNo" />
      <label for="street">Street,Society,Landmark</label>
      <input type="text" name="street" id="street" />
      <label for="recipName">Recipient's Name</label>
      <input type="text" name="recipName" id="recipName" />
    </form>
  );

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
    <div className="locationBox m-3 px-3 py-3">
      <b className="text-black ">Select a location</b>
      <button
        style={{ all: "unset", padding: "10px" }}
        onClick={() => getLocation()}
        className="mt-2 text-black"
      >
        <IoMdLocate size={20} /> Use current location
      </button>
      <AddressAutoComplete setAddress={setAddress} />

      <hr />
      <div className="d-flex mx-3 justify-content-evenly ">
        {["Home", "Office", "Hotel", "other"].map((e, i) => (
          <button id={`addresType-${i}`} key={e} style={addressType}>
            {e}
          </button>
        ))}
      </div>
      {fullAdress}
      <center>
        <button style={saveButtonStyle}>Save Address</button>
      </center>
      <hr />
      <b className="text-black py-5">Saved Addresses </b>
      <AddressListWrapper addressLists={savedAddressLists} />
    </div>
  );
};

const savedAddressLists = [
  { type: "Home", street: "sec-16 rohini", flatno: "g2-12/13 first floor" },
  {
    type: "Office",
    street: "Cyber city gugaon",
    flatno: "dlf trade tower first floor",
  },
  { type: "Hotel", street: "talwandi kota", flatno: "ortus room no-325" },
];

export default LocatinBox;
