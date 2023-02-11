import { Fragment } from "react";
import { HeaderOne } from "../Header";
import { FooterOne } from "../Footer";
import ScrollToTop from "../scroll-to-top";

const LayoutTwo = ({ children, aboutOverlay, footerBgClass }) => {
  return (
    <Fragment>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterOne footerBgClass={footerBgClass} />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutTwo;
