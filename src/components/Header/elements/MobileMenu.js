import { IoIosClose, IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import clsx from "clsx";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuWidgets from "./MobileMenuWidgets";
import LocationBox from "../../Addresses/LocationBox";

const MobileMenu = ({ activeStatus, getActiveStatus }) => {
  const couponCodesSection = {
    backgroundImage: `url("https://www.nicepng.com/png/detail/443-4431851_coupon-png-hd-coupon-ticket-png.png")`,
    height: "120px",
    backgroundSize: "cover",
    marginBottom: "15px",
  };
  const currentAddress = "Rohini Sector 16 G2-12/13 1st floor 110085";
  const [locationBox, setlocationBox] = useState(false);
  const locationBoxStyle = {
    position: "absolute",
    width: "100%",
    height: "100vh",
    margin: 0,
    right: "0",
    zIndex: "15",
    display: locationBox ? "block" : "none",
    backgroundColor: "#f7f5f5",
    top: "100%",
  };
  return (
    <div className={clsx("offcanvas-mobile-menu", activeStatus && "active")}>
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => {
          getActiveStatus(false);
          setlocationBox(false);
        }}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => {
            getActiveStatus(false);
            setlocationBox(false);
          }}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper">
          <div className="offcanvas-mobile-menu__content">
            {/* current address */}
            <div className="offcanvas-mobile-menu__search ">
              <div onClick={() => setlocationBox(!locationBox)}>
                <b className="text-black">Deliver at</b>
                <p
                  style={{
                    width: "100%",
                    lineHeight: "17px",
                    fontSize: "16px",
                    marginTop: "5px",
                    marginBottom: "0px",
                  }}
                >
                  {currentAddress.length > 20
                    ? currentAddress.substring(0, 25) + " ..."
                    : currentAddress}
                  <IoMdArrowDropdown
                    style={{ position: "absolute", top: "30px", right: "20px" }}
                  />
                </p>
              </div>
              {/* location dropdown */}
              <div style={locationBoxStyle} className="locationAccess p-3">
                <LocationBox active={locationBox} />
              </div>
            </div>

            {/* mobile nav menu */}
            <MobileMenuNav getActiveStatus={getActiveStatus} />

            <div>
              <p
                style={{
                  fontWeight: "600",
                  marginBottom: "2px",
                  color: "black",
                  paddingLeft: "10px",
                }}
              >
                Coupons and Offers %
              </p>
              <p style={couponCodesSection}></p>
            </div>
            {/* mobile widgets */}
            <MobileMenuWidgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
