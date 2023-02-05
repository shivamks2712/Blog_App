import { IoMdPower, IoMdShare, IoMdInformationCircle } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi";
import { FaAddressCard } from "react-icons/fa";
import Anchor from "../../anchor";

const MobileMenuWidgets = () => {
  return (
    <div className="offcanvas-mobile-menu__widgets ">
      <div className="contact-widget space-mb--30">
        <p className="fs-6 ">Your Information</p>
        <ul className="px-2 text-black">
          <li>
            <Anchor path="/user/login">
              <HiShoppingBag fontSize={20} />
              Orders
            </Anchor>
          </li>
          <li>
            <Anchor path="/user/login">
              <FaAddressCard fontSize={20} />
              Manage Address
            </Anchor>
          </li>
        </ul>
        <p className="fs-6 mt-4 ">Other Informations</p>
        <ul className="px-2 text-black">
          <li>
            <Anchor path="/user/login">
              <IoMdShare fontSize={20} />
              Share the app
            </Anchor>
          </li>
          <li>
            <Anchor path="/user/login">
              <IoMdInformationCircle fontSize={20} />
              About Us
            </Anchor>
          </li>
          <li>
            <IoMdPower fontSize={20} />
            <Anchor path="/">Logout</Anchor>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenuWidgets;
