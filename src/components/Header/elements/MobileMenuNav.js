import { useEffect } from "react";
import Anchor from "../../anchor";
import { TbDiscount2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu =
      offCanvasNav.querySelectorAll(".mobile-sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const spanIconStyle = {
    fontSize: "10px",
    paddingTop: "2px",
  };
  const reactIconStyle = {
    display: "flex",
    flexDirection: "column",
    fontSize: "15px",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation mb-3"
      id="offcanvas-mobile-menu__navigation"
    >
      <p className="fs-4 fw-bolder fc-black mb-2" style={{ color: "black" }}>
        My Account
      </p>
      <span className="fs-6">9835******</span>
      <ul
        className="d-flex justify-content-around  mt-3   "
        style={{ backgroundColor: "#E6FCE4", borderRadius: "8px" }}
      >
        <li className="menu-item">
          <Anchor style={reactIconStyle} path="/">
            <TbDiscount2 />
            <span style={spanIconStyle}>Offers</span>
          </Anchor>
        </li>
        <li className="menu-item">
          <Anchor style={reactIconStyle} path="/">
            <BiSupport />
            <span style={spanIconStyle}>Help</span>
          </Anchor>
        </li>
        <li className="menu-item">
          <Anchor style={reactIconStyle} path="/">
            <MdOutlinePayment />

            <span style={spanIconStyle}>Payments</span>
          </Anchor>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
