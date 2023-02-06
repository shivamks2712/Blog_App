import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { Tooltip } from "react-tippy";
import clsx from "clsx";
import { addToCart } from "../../store/slices/cart-slice";

import ProductModal from "./ProductModal";

const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Col xl={2} lg={3} md={4} xs={6} className={clsx(bottomSpace)}>
        <div className="product-grid">
          {/*=======  single product image  =======*/}
          <div className="product-grid__image">
            <div className="image-wrap">
              <img
                src={process.env.PUBLIC_URL + product.thumbImage[0]}
                className="img-fluid"
                alt={product.name}
              />
              {product.thumbImage.length > 1 ? (
                <img
                  src={process.env.PUBLIC_URL + product.thumbImage[1]}
                  className="img-fluid"
                  alt={product.name}
                />
              ) : (
                ""
              )}
            </div>
            <div className="product-grid__floating-badges d-flex">
              {product.discount && product.discount > 0 ? (
                <span className="onsale">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="hot">New</span> : ""}
              {product.stock === 0 ? (
                <span className="out-of-stock">out</span>
              ) : (
                ""
              )}
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
              <h3>
                <p>{product.name}</p>
              </h3>

              {/* add to cart */}
              {product.stock && product.stock > 0 ? (
                <button
                  onClick={() => {
                    console.log(cartItem);
                    dispatch(addToCart(product));
                  }}
                  disabled={
                    cartItem !== undefined &&
                    cartItem.quantity >= cartItem.stock
                  }
                >
                  {cartItem !== undefined
                    ? `Added To Cart  [${cartItem.quantity}]`
                    : "Add to cart"}
                </button>
              ) : (
                <button disabled>Out of Stock</button>
              )}
            </div>
            <div className="price">
              {product.discount > 0 ? (
                <Fragment>
                  <span className="main-price discounted">${productPrice}</span>
                  <span className="discounted-price">${discountedPrice}</span>
                </Fragment>
              ) : (
                <span className="main-price">${productPrice}</span>
              )}
            </div>
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
      />
    </Fragment>
  );
};

export default ProductGridList;
