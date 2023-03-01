import { Fragment } from "react";
import { HeaderOne } from "../Header";
import { FooterOne } from "../Footer";
import ScrollToTop from "../scroll-to-top";

const LayoutOne = ({ children, aboutOverlay, searchDisplay }) => {
  return (
    <Fragment>
      <HeaderOne aboutOverlay={aboutOverlay} searchDisplay={searchDisplay} />
      {children}
      <FooterOne />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutOne;
