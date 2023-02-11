import { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { IoIosSearch, IoMdPerson, IoIosCart, IoIosMenu } from "react-icons/io";
import SearchOverlay from "./elements/SearchOverlay";
import CartOverlay from "./elements/CartOverlay";
import MobileMenu from "./elements/MobileMenu";
import Anchor from "../anchor";
import Shop27Logo from "../BrandLogo/Shop27Logo";

const HeaderOne = ({ aboutOverlay }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
  const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] =
    useState(false);

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop
      ? (document.body.style.paddingTop = `${headerHeight}px`)
      : (document.body.style.paddingTop = 0);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <Fragment>
      <header
        className={clsx("topbar-shadow", scroll > headerTop && "is-sticky")}
      >
        <Container className="wide">
          <div className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30 py-2">
            {/* logo */}
            <div className="header-content__logo d-flex align-items-center space-pr--15">
              <Anchor path="/">
                <Shop27Logo />
              </Anchor>
            </div>

            {/* icons */}
            <div className="header-content__icons space-pl--15">
              <ul className="d-block ">
                <li>
                  <button
                    onClick={() => {
                      setOffCanvasSearchActive(true);
                      document
                        .querySelector("body")
                        .classList.add("overflow-hidden");
                    }}
                  >
                    <IoIosSearch />
                  </button>
                </li>
                <li>
                  <Anchor path="/user/cart">
                    <IoIosCart />
                    {cartItems.length >= 1 ? (
                      <span className="count">
                        {cartItems.length ? cartItems.length : ""}
                      </span>
                    ) : (
                      ""
                    )}
                  </Anchor>
                </li>
                <li>
                  <button onClick={() => setOffCanvasMobileMenuActive(true)}>
                    <IoMdPerson />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>

      {/* search overlay */}
      <SearchOverlay
        activeStatus={offCanvasSearchActive}
        getActiveStatus={setOffCanvasSearchActive}
      />
      {/* cart overlay */}
      <CartOverlay
        activeStatus={offCanvasCartActive}
        getActiveStatus={setOffCanvasCartActive}
      />

      {/* Mobile Menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
    </Fragment>
  );
};

export default HeaderOne;
