// import AddressList from "./AddressList";
// Address in adress book
import { IoIosCheckmarkCircle, IoIosCloseCircleOutline } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
const AddressListWrapper = ({ addressLists, getAddress }) => {
  const AddressList = ({ address }) => {
    const [deleteConfirm, setdeleteConfirm] = useState(false);
    return (
      <div style={{ borderBottom: "1px solid grey" }} className="py-2">
        <div className="addressList row position-relative">
          <div
            className="col-10"
            onClick={() => {
              getAddress(address);
            }}
          >
            <b className="text-black"> {address.type}</b>
            <p>{(address.street + "," + address.flatno).substring(0, 35)}...</p>
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
              deleteConfirm ? "flex" : "none"
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

  return (
    <div className="addressListWrapper mt-2">
      {addressLists.map((address, i) => (
        <AddressList address={address} key={i} />
      ))}
    </div>
  );
};

export default AddressListWrapper;
