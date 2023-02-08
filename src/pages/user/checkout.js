import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { IoMdCash, IoMdArrowDropdown, IoMdAddCircle } from "react-icons/io";
import { LayoutTwo } from "../../components/Layout";
import Anchor from "../../components/anchor";
import AddressListWrapper from "../../components/Addresses/AddressListWrapper";

const Checkout = () => {
  const savedAddressLists = [
    { type: "Home", street: "sec-16 rohini", flatno: "g2-12/13 first floor" },
    {
      type: "Office",
      street: "Cyber city gugaon",
      flatno: "dlf trade tower first floor",
    },
    { type: "Hotel", street: "talwandi kota", flatno: "ortus room no-325" },
  ];
  let cartTotalPrice = 0;

  const [addressListsDisplay, setaddressListsDisplay] = useState(false);
  const [currentActiveAddress, setcurrentActiveAddress] = useState(
    savedAddressLists[0]
  );
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });
  useEffect(() => {
    setaddressListsDisplay(!addressListsDisplay);
  }, [currentActiveAddress]);

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <div className="checkout-area space-mt--r100 space-mb--r100 p-0">
        <Container fluid>
          {cartItems && cartItems.length >= 1 ? (
            <Row className="justify-content-around">
              {/* Cart Total */}
              <Col md={7} lg={6} className=" space-mb--50">
                <h4 className="checkout-title">Cart Total</h4>
                <div className="checkout-cart-total">
                  <h4>
                    Product <span>Total</span>
                  </h4>
                  <ul>
                    {cartItems.map((product, i) => {
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);

                      cartTotalPrice += discountedPrice * product.quantity;
                      return (
                        <li key={i}>
                          {product.name} X {product.quantity}{" "}
                          <span>${discountedPrice}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <p>
                    Sub Total <span>${cartTotalPrice.toFixed(2)}</span>
                  </p>
                  <p>
                    Shipping Fee <span>$00.00</span>
                  </p>
                  <h4>
                    Grand Total <span>${cartTotalPrice.toFixed(2)}</span>
                  </h4>
                </div>
              </Col>

              {/* Payment Method */}
              <Col lg={5} md={8}>
                <h4 className="checkout-title">Payment Method</h4>
                <div
                  className="checkout-payment-method"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_check"
                      name="payment-method"
                      defaultValue="check"
                    />
                    <label htmlFor="payment_check">Check Payment</label>
                  </div>
                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_bank"
                      name="payment-method"
                      defaultValue="bank"
                    />
                    <label htmlFor="payment_bank">Direct Bank Transfer</label>
                  </div>
                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_cash"
                      name="payment-method"
                      defaultValue="cash"
                    />
                    <label htmlFor="payment_cash">Cash on Delivery</label>
                  </div>
                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_paypal"
                      name="payment-method"
                      defaultValue="paypal"
                    />
                    <label htmlFor="payment_paypal">Paypal</label>
                  </div>
                  <div className="single-method">
                    <input
                      type="radio"
                      id="payment_payoneer"
                      name="payment-method"
                      defaultValue="payoneer"
                    />
                    <label htmlFor="payment_payoneer">Payoneer</label>
                  </div>
                </div>
                <div className="checkoutDelieverAddress ">
                  <p
                    onClick={() => setaddressListsDisplay(!addressListsDisplay)}
                  >
                    <b style={{ color: "black" }}>Deliever to - </b>
                    <span>
                      {" "}
                      {(
                        currentActiveAddress.street +
                        " " +
                        currentActiveAddress.flatno
                      ).substring(0, 25)}{" "}
                      ...
                      <IoMdArrowDropdown
                        size={25}
                        style={{
                          // float: "right",
                          marginLeft: "10px",
                        }}
                        color="black"
                      />
                    </span>
                  </p>
                  <div
                    className={`checkoutAddressLists  d-${
                      addressListsDisplay ? "block" : "none"
                    }`}
                  >
                    <Anchor path="/user/address" className="text-black">
                      <IoMdAddCircle size={20} /> <b> Add new address</b>
                    </Anchor>
                    <AddressListWrapper
                      addressLists={savedAddressLists}
                      getAddress={setcurrentActiveAddress}
                    />
                  </div>
                </div>

                <button className="lezada-button lezada-button--medium space-mt--20">
                  Place order
                </button>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCash />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      No items found in cart to checkout
                    </p>
                    <Anchor
                      path="/shop/left-sidebar"
                      className="lezada-button lezada-button--medium"
                    >
                      Shop Now
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default Checkout;

const stateArrayIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
