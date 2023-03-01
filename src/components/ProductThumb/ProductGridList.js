import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { Tooltip } from "react-tippy";
import clsx from "clsx";
import { addToCart } from "../../store/slices/cart-slice";
import ShopItemModal from "./ShopItemModal";

const imgStyle = {
  height: "230px",
  width: "auto",
  border: "1px solid grey",
  borderRadius: "8px ",
  padding: "0px 5px",
  display: "flex",
  alignItems: "center",
};

const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  bottomSpace,
  stock,
}) => {
  const defaultImageurl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthzn7pJ0DpTxjWqDrWI166FP8ffQGbSkQYg&usqp=CAU";
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const discount = ((1 - discountedPrice / productPrice) * 100).toFixed(0);
  return (
    <Fragment>
      <Col xl={2} lg={3} md={4} xs={6} className={clsx(bottomSpace)}>
        <div className="product-grid">
          {/*=======  single product image  =======*/}
          <div className="product-grid__image">
            <div className="image-wrap" style={imgStyle}>
              <img
                src={
                  product.images.length > 0
                    ? product.images[0].image_url
                    : defaultImageurl
                }
                className="img-fluid"
                alt={product.name}
                style={{
                  height: "95%",
                }}
              />
              {product.images.length > 1 ? (
                <img
                  src={
                    product.image
                      ? product.images[0].image_url
                      : defaultImageurl
                  }
                  className="img-fluid"
                  alt={product.name}
                  // style={imgStyle}
                />
              ) : (
                ""
              )}
            </div>
            <div className="product-grid__floating-badges d-flex">
              {discount > 0 ? (
                <span className="onsale text-black">-{discount}%</span>
              ) : (
                ""
              )}
              {stock === 0 ? <span className="out-of-stock">out</span> : ""}
            </div>
            <div className="product-grid__floating-icons">
              {/* quick view */}
              <Tooltip
                title="Quick view"
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={() => setModalShow(true)}
                  className="d-lg-block"
                >
                  <MdOutlineZoomOutMap />
                </button>
              </Tooltip>
            </div>
          </div>

          {/*=======  single product content  =======*/}
          <div className="product-grid__content">
            <div className="title">
              <h3 className="mt-2">
                <p
                  style={{
                    padding: "2px 0px 5px 0px",
                  }}
                >
                  {product.name.substring(0, 35)}
                </p>
              </h3>
              {/* add to cart */}
              {product.available > 0 ? (
                <button
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                  disabled={
                    cartItem !== undefined &&
                    cartItem.quantity >= product.available
                  }
                >
                  {cartItem !== undefined
                    ? `Added To Cart  [${cartItem.quantity}]`
                    : "Add to cart"}
                </button>
              ) : (
                <button disabled>Out Of Stock</button>
              )}
            </div>
            <div className="price">
              {discount > 0 ? (
                <Fragment>
                  <span className="main-price discounted">₹{productPrice}</span>
                  <span className="discounted-price">₹{discountedPrice}</span>
                </Fragment>
              ) : (
                <span className="main-price">₹{productPrice}</span>
              )}
            </div>
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ShopItemModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
      />
    </Fragment>
  );
};

export default ProductGridList;
