import { Fragment } from "react";
import { MdLocationPin } from "react-icons/md";

import { ProductRating } from "../Product";

const ProductDescription = ({ product, cartItems }) => {
  return (
    <div className="product-content">
      {product.rating && product.rating > 0 ? (
        <div className="product-content__rating-wrap d-block d-sm-flex space-mb--20">
          <div className="product-content__rating space-mr--20">
            <ProductRating ratingValue={product.rating} />
          </div>
          <div className="product-content__rating-count">
            <a href="#">( {product.ratingCount} customer reviews )</a>
          </div>
        </div>
      ) : (
        ""
      )}
      <h2 className="product-content__title space-mb--20">{product.name}</h2>
      <span style={{ fontSize: "12px" }}>
        <MdLocationPin style={{ fontSize: "22px" }} />
        {`(${product.address ? product.address : "address"})`}
        <br />
        1.4km
      </span>

      <div className="product-content__description space-mb--30 mt-2">
        <p>{product.shortDescription}</p>
      </div>
      <Fragment>
        <div className="product-content__button-wrapper d-flex align-items-center ">
          {product.open ? (
            <button className="lezada-button lezada-button--medium product-content__cart space-mr--20 space-mt-20">
              Explore Products
            </button>
          ) : (
            <div>
              <button
                className="lezada-button lezada-button--medium product-content__ofs space-mr--10"
                disabled
              >
                Closed Now
              </button>
              <br />
              <b style={{ fontSize: "8px", paddingInline: "10px" }}>
                Opens Tomorrow 10 AM
              </b>
            </div>
          )}
        </div>
      </Fragment>
    </div>
  );
};

export default ProductDescription;
