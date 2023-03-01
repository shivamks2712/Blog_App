import {
  IoIosClose,
  IoMdArrowDropdown,
  IoMdArrowBack,
  IoMdAddCircle,
} from "react-icons/io";
import clsx from "clsx";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuWidgets from "./MobileMenuWidgets";
import ImageSliderOffers from "../../ImageSlider/ImageSliderOffers";
import Anchor from "../../anchor";
import AddressList from "../elements/addressLists/AddressList";
import { useState } from "react";
import { useSelector } from "react-redux";

const MobileMenu = ({ activeStatus, getActiveStatus }) => {
  const [currentAddress, setCurrentAddress] = useState("Select Address");
  const [displayAddress, setDisplayAddress] = useState(false);
  const { addressItems } = useSelector((state) => state.address);

  return (
    <div className={clsx("offcanvas-mobile-menu", activeStatus && "active")}>
      <div
        className="offcanvas-mobile-menu__overlay-close "
        onClick={() => {
          getActiveStatus(false);
          setDisplayAddress(false);
        }}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => {
            getActiveStatus(false);
            setDisplayAddress(false);
          }}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper position-relative">
          <div className="offcanvas-mobile-menu__content">
            {/* current address */}
            <div
              className="offcanvas-mobile-menu__search"
              onClick={() => setDisplayAddress(!displayAddress)}
            >
              <b className="text-black">Deliver at</b>
              <p
                style={{
                  width: "100%",
                  lineHeight: "17px",
                  fontSize: "15px",
                  marginTop: "5px",
                  marginBottom: "0px",
                }}
              >
                {currentAddress.substring(0, 30) + " ..."}
                <IoMdArrowDropdown
                  style={{ position: "absolute", top: "30px", right: "20px" }}
                />
              </p>
            </div>

            {/* adress lists */}
            <div
              className={`d-${
                displayAddress ? "block" : "none"
              } addressListWrapper px-2`}
              style={{
                zIndex: 1000,
                backgroundColor: "white",
                height: "100%",
                top: 0,
              }}
            >
              <div className="d-flex justify-content-between me-3">
                <IoMdArrowBack
                  color="black"
                  size={20}
                  onClick={() => setDisplayAddress(false)}
                />
                <Anchor
                  path="/user/address"
                  className="fw-semibold"
                  style={{ color: "black" }}
                  onClick={() => {
                    getActiveStatus(false);
                    setDisplayAddress(false);
                  }}
                >
                  <IoMdAddCircle className="me-1" size={17} color="green" />
                  Add new address
                </Anchor>
              </div>
              {addressItems && addressItems.length >= 1 ? (
                addressItems.map((address, i) => (
                  <AddressList
                    setAddress={setCurrentAddress}
                    address={address}
                    key={i}
                  />
                ))
              ) : (
                <p className="d-flex justify-content-around my-5">
                  No Saved Address
                </p>
              )}
            </div>

            <div className={`d-${displayAddress ? "none" : "block"}`}>
              {/* mobile nav menu */}
              <MobileMenuNav getActiveStatus={getActiveStatus} />
              <div>
                <p
                  style={{
                    fontWeight: "600",
                    margin: "2px auto",
                    color: "black",
                    paddingLeft: "10px",
                  }}
                >
                  Deal of the day
                </p>
                <ImageSliderOffers
                  imageSliderData={[
                    "ImageSliderOffers",
                    "ImageSliderOffers",
                    "ImageSliderOffers",
                  ]}
                />
              </div>

              {/* mobile widgets */}
              <MobileMenuWidgets />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
