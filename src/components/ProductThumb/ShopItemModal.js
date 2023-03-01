import { Modal, Row, Col } from "react-bootstrap";
import { ProductRating } from "../Product";
import Swiper, { SwiperSlide } from "../swiper";
import { IoIosReturnLeft } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";
import { getProductCartQuantity } from "../../lib/product";
import { useDispatch, useSelector } from "react-redux";
import cogoToast from "@hasanm95/cogo-toast";
import { addToCart } from "../../store/slices/cart-slice";

const gallerySwiperParams = {
  pagination: true,
  navigation: true,
  spaceBetween: 200,
  size: 8,
};

const ShopItemMOdal = (props) => {
  const { product } = props;
  const [quantityCount, setQuantityCount] = useState(1);
  const productDetails = getDataOfProducts(product);

  const { cartItems } = useSelector((state) => state.cart);

  const productCartQty = getProductCartQuantity(cartItems, product);
  const dispatch = useDispatch();
  const cartButtons = (
    <Row>
      <Col className="my-4">
        <div
          className="product-quickview__quantity space-mb--20 ms-auto me-auto"
          style={{ width: "max-content" }}
        >
          <div className="product-quickview__quantity__title mx-2">
            Quantity
          </div>
          <div className="cart-plus-minus mx-3">
            <button
              onClick={() =>
                setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
              }
              className="qtybutton"
            >
              -
            </button>
            <input
              className="cart-plus-minus-box"
              type="text"
              value={quantityCount}
              readOnly
            />
            <button
              onClick={() => {
                if (
                  productDetails.available - productCartQty - quantityCount >
                  0
                )
                  setQuantityCount(quantityCount + 1);
                else {
                  cogoToast.error("Product Limit Reached", {
                    position: "bottom-left",
                  });
                }
              }}
              className="qtybutton"
            >
              +
            </button>
          </div>
        </div>

        <div
          className="product-quickview__button-wrapper m-auto"
          style={{ width: "fit-content" }}
        >
          {productDetails.available && productDetails.available > 0 ? (
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    ...product,
                    quantity: quantityCount,
                  })
                );
                props.onHide();
              }}
              disabled={productCartQty >= productDetails.available}
              className="lezada-button lezada-button--medium product-quickview__cart space-mr--10"
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="lezada-button lezada-button--medium product-quickview__ofs space-mr--10"
              disabled
            >
              Out of Stock
            </button>
          )}
        </div>
      </Col>
    </Row>
  );

  if (product)
    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        className="product-quickview"
        centered
      >
        <Modal.Body>
          <Modal.Header closeButton></Modal.Header>
          <Row className="my-2">
            <Col md={6} sm={12}>
              {product && product.images.length ? (
                <Swiper options={gallerySwiperParams}>
                  {product.images.map((single, key) => (
                    <SwiperSlide key={key} style={{ textAlign: "center" }}>
                      <img
                        src={single.image_url}
                        alt=""
                        className="p-2 productModalImageSlides"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : null}

              {cartButtons}
            </Col>
            <Col md={6} sm={12} className="ms-auto ">
              {/* <CustomScroll allowOuterScroll={true}> */}
              <div className="product-quickview__content bg-white">
                <p className="product-quickview__title space-mb--20 text-black fs-2">
                  {product.name}
                  {product.rating && product.rating > 0 ? (
                    <div className="product-quickview__rating-wrap space-mb--20">
                      <div className="product-quickview__rating">
                        <ProductRating ratingValue={product.rating} />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </p>

                <div className="product-quickview__description product_details space-mb--30">
                  <span
                    className="me-3 ms-1"
                    style={{
                      color: "red",
                      height: "10px",
                      width: "10px",
                      backgroundColor: productDetails.isVeg ? "green" : "red",
                      display:
                        productDetails.isVeg === null ? "none" : "inline-block",
                      borderRadius: "50%",
                    }}
                  ></span>
                  <span style={{ fontSize: "12px" }}>
                    {product.nutritional_info
                      ? "( " + product.nutritional_info + " )"
                      : ""}
                  </span>
                  {product.net_quantity ? (
                    <span>product.net_quantity</span>
                  ) : (
                    ""
                  )}
                  {!product.cancellable ? (
                    <p className="text-black"> Not cancellable</p>
                  ) : (
                    ""
                  )}
                  <div className="position-relative">
                    <p>
                      {product.short_description
                        ? product.short_description.substring(0, 150)
                        : ""}
                      <span
                        className="fw-bolder ms-1 fs-6"
                        onClick={() => {
                          document.getElementById(
                            "long_description"
                          ).style.display = "block";
                        }}
                      >
                        ...
                      </span>
                    </p>
                    <p
                      className="position-absolute bg-white  top-0"
                      style={{
                        display: "none",
                        width: "100%",
                      }}
                      id="long_description"
                    >
                      {product.long_description
                        ? product.long_description
                        : product.short_description}
                      <br />
                      <span
                        className="fs-6 text-black fw-semibold"
                        onClick={() =>
                          (document.getElementById(
                            "long_description"
                          ).style.display = "none")
                        }
                      >
                        Show Less
                      </span>{" "}
                    </p>
                  </div>

                  {productDetails.returnable ? (
                    <p>
                      <IoIosReturnLeft
                        color="black"
                        fontWeight={600}
                        size={20}
                        className="me-2"
                      />
                      {productDetails.return_window} return policy
                    </p>
                  ) : (
                    <p className="fw-bold text-dark">No return policy</p>
                  )}
                  <p>
                    <TbTruckDelivery color="green" size={20} className="me-2" />
                    Shipped within {productDetails.time_to_ship}
                  </p>
                  {productDetails.maximum_value !== productDetails.value ? (
                    <span
                      className="main-price discounted fw-bolder me-2"
                      style={{ textDecoration: "line-through" }}
                    >
                      ₹{productDetails.maximum_value}
                    </span>
                  ) : (
                    ""
                  )}

                  <span className="discounted-price text-dark fw-bolder">
                    ₹ {productDetails.value}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  else return "";
};

export default ShopItemMOdal;

// get product data
const getDataOfProducts = (product) => {
  const {
    name,
    cancellable,
    isVeg,
    short_description,
    long_description,
    maximum_value,
    value,
    nutritional_info,
    returnable,
    return_window,
    time_to_ship,
    net_quantity,
    available,
  } = product;
  return {
    name,
    short_description,
    long_description,
    cancellable,
    isVeg,
    maximum_value,
    nutritional_info,
    value,
    returnable,
    return_window,
    time_to_ship,
    net_quantity,
    available,
  };
};
