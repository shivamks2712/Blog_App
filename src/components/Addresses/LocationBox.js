import {
  IoMdLocate,
  IoIosSearch,
  IoIosCheckmarkCircle,
  IoIosCloseCircleOutline,
  IoIosAddCircle,
} from "react-icons/io";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const LocatinBox = ({ active }) => {
  const addressType = {
    border: "1px solid grey",
    fontSize: "12px",
    padding: "4px 8px",
    color: "black",
    borderRadius: "5px",
  };
  const saveButtonStyle = {
    all: "unset",
    padding: "10px 0px",
    width: "80%",
    borderRadius: "6px",
    color: "white",
    fontSize: "16px",
    backgroundColor: "green",
  };
  const Address = ({ street, flatno, type }) => {
    const [deleteConfirm, setdeleteConfirm] = useState(false);
    return (
      <div
        style={{ borderBottom: "1px solid grey" }}
        className="container py-2 "
      >
        <div className="row position-relative">
          <div className="col-10">
            <b className="text-black"> {type}</b>
            <p style={{ fontSize: "smaller" }}>
              {(street + "," + flatno).substring(0, 35)}
            </p>
          </div>
          <div className="col-2 m-auto">
            <AiFillDelete
              onClick={() => {
                setdeleteConfirm(true);

                setTimeout(() => {
                  setdeleteConfirm(false);
                }, 3000);
              }}
              size={22}
              color="black"
            />
          </div>

          <div
            className={`d-${
              active && deleteConfirm ? "flex" : "none"
            } position-absolute text-black deleteConfirmationBox`}
            style={{
              top: "0px",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "space-around",
              zIndex: 4,
              backgroundColor: "white",
            }}
          >
            <span>Confirm Delete</span>
            <IoIosCloseCircleOutline
              size={22}
              onClick={() => setdeleteConfirm(false)}
              color="red"
            />
            <IoIosCheckmarkCircle size={22} color="green" />
          </div>
        </div>
      </div>
    );
  };
  const fullAdress = (
    <form className="locationBoxAddressForm my-3 px-1 position-relative">
      <label for="flatNo">Flat,HouseNo,Floor,Tower</label>
      <input autoFocus type="text" name="flatNo" id="flatNo" />
      <label for="street">Street,Society,Landmark</label>
      <input type="text" name="street" id="street" />
      <label for="recipName">Recipient's Name</label>
      <input type="text" name="recipName" id="recipName" />
      <label for="pinCode">Pincode</label>
      <input type="text" name="pinCode" id="recipName" />
    </form>
  );
  return (
    <div className="locationBox">
      <b className="text-black my-0 pb-2">Select a location</b>
      <div
        style={{
          backgroundColor: "#ebebeb",
        }}
        className="d-flex align-items-center px-1 my-1"
      >
        <IoIosSearch size={22} />
        <input
          style={{ background: "none", fontSize: "15px", paddingLeft: "5px" }}
          type="search"
          placeholder="Start typing to search"
          id="locationBoxInputManualLocation"
        />
      </div>
      <p style={{ color: "#8db8fc" }} className="mx-2">
        <IoMdLocate fontSize={25} style={{ paddingRight: "5px" }} />
        Use current location
      </p>
      <hr />
      <div className="d-flex justify-content-evenly ">
        {["Home", "Office", "Hotel", "other"].map((e, i) => (
          <span id={`addresType-${i}`} key={e} style={addressType}>
            {e}
          </span>
        ))}
      </div>
      {fullAdress}
      <center>
        <button style={saveButtonStyle}>Save Address</button>
      </center>
      <hr />
      <b className="text-black m-2 py-5">
        Saved Addresses{" "}
        <IoIosAddCircle
          onClick={() => console.log("hii")}
          style={{ float: "right", marginRight: "10px" }}
        ></IoIosAddCircle>{" "}
      </b>
      <div className="mt-2">
        <Address
          type="Home"
          street="sec-16 rohini"
          flatno="g2-12/13 first floor"
        />
        <Address
          type="Office"
          street="f-block gurgaon"
          flatno="trade tower dlf first floor"
        />{" "}
        <Address
          type="Home"
          street="sec-16 rohini"
          flatno="g2-12/13 first floor"
        />
      </div>
    </div>
  );
};
export default LocatinBox;
