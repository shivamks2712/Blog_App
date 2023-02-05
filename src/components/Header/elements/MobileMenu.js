import { IoIosClose } from "react-icons/io";
import clsx from "clsx";
import MobileMenuSearch from "./MobileMenuSearch";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuWidgets from "./MobileMenuWidgets";

const MobileMenu = ({ activeStatus, getActiveStatus }) => {
  const couponCodesSection = {
    backgroundImage: `url("https://www.nicepng.com/png/detail/443-4431851_coupon-png-hd-coupon-ticket-png.png")`,
    height: "120px",
    backgroundSize: "cover",
    marginBottom: "15px",
  };
  return (
    <div className={clsx("offcanvas-mobile-menu", activeStatus && "active")}>
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => getActiveStatus(false)}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => getActiveStatus(false)}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper">
          <div className="offcanvas-mobile-menu__content">
            {/* mobile search */}
            <MobileMenuSearch />
            {/* mobile nav menu */}
            <MobileMenuNav getActiveStatus={getActiveStatus} />

            <div
              onClick={() => {
                console.log("hii");
              }}
            >
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
