// Address in adress book
import { IoIosCheckmarkCircle, IoIosCloseCircleOutline } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../../../../store/slices/address-slice";

const AddressList = ({ setAddress, address }) => {
  const [deleteConfirm, setdeleteConfirm] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      style={{ borderBottom: "1px solid grey", cursor: "pointer" }}
      className="p-2  my-2"
    >
      <div className="addressList row position-relative">
        <div
          className="col-10"
          onClick={() => setAddress(address.flatNo + " " + address.street)}
        >
          <b className="me-2" style={{ fontSize: "14px", color: "green" }}>
            {address.type ? "Home" : "Other"}
          </b>
          <b style={{ fontSize: "11px", color: "black" }}>
            {address.flatNo.substring(0, 20)}...
          </b>
          <p style={{ fontSize: "10px", marginTop: "5px" }}>
            {address.street.substring(0, 30) + "..."}
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
            color="#ff9900"
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
          <IoIosCheckmarkCircle
            size={22}
            color="green"
            onClick={() => {
              setdeleteConfirm(false);
              dispatch(deleteAddress({ addressId: address.addressId }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressList;
