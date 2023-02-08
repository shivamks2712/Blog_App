import { IoIosClose, IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import clsx from "clsx";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuWidgets from "./MobileMenuWidgets";
import ImageSliderOffers from "../../ImageSlider/ImageSliderOffers";
import Anchor from "../../anchor";

const MobileMenu = ({ activeStatus, getActiveStatus }) => {
  const currentAddress = "Rohini Sector 16 G2-12/13 1st floor 110085";
  const [locationBox, setlocationBox] = useState(false);

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
            <Anchor
              path="/user/address"
              className="offcanvas-mobile-menu__search "
            >
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
            </Anchor>

            {/* mobile nav menu */}
            <MobileMenuNav getActiveStatus={getActiveStatus} />

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

            {/* mobile widgets */}
            <MobileMenuWidgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
