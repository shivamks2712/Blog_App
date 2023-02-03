import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import clsx from "clsx";
import ProductModal from "./ProductModal";
import Anchor from "../anchor";

const ProductGrid = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  column,
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <Col
        lg={column && column === 4 ? 3 : 4}
        md={6}
        className={clsx(bottomSpace)}
      >
        <div className="product-grid">
          {/*=======  single product image  =======*/}
          <div className="product-grid__image">
            <Anchor
              path={`/shop/product-basic/${product.slug}`}
              className="image-wrap"
            >
              <img
                src={process.env.PUBLIC_URL + product.thumbImage[0]}
                height={"220px"}
                alt={product.name}
              />
            </Anchor>
          </div>

          {/*=======  single product content  =======*/}
          <div className="product-grid__content">
            <div className="title">
              <h3>
                <Anchor path={`/shop/product-basic/${product.slug}`}>
                  {product.name}
                </Anchor>
              </h3>
              {/* add to cart */}
              <Anchor path={`/shop/product-basic/${product.slug}`}>
                Explore Now
              </Anchor>
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

export default ProductGrid;
