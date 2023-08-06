import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import clsx from "clsx";
import ProductModal from "./ProductModal";
import Anchor from "../anchor";

const ProductGrid = ({ shop, bottomSpace, column }) => {
  const [modalShow, setModalShow] = useState(false);
  const name = shop.store.name;

  return (
    <Fragment>
      <Col
        xs={6}
        lg={column && column === 4 ? 3 : 4}
        md={4}
        className={clsx(bottomSpace)}
      >
        <div
          className="product-grid"
          style={{
            border: "1px solid grey",
            padding: "5px",
            borderRadius: "8px",
            height: "100%",
          }}
        >
          {/*=======  single product image  =======*/}
          <div className="product-grid__image px-1">
            <a
              disabled="disabled"
              onClick={() => setModalShow(true)}
              className="image-wrap"
            >
              <img src={shop.store.symbol} height="220px" />
            </a>
          </div>

          {/*=======  single product content  =======*/}
          <div className="product-grid__content">
            <div className="title mb-2">
              <h3>
                <Anchor path={`/shop/${shop.id}`}>{name}</Anchor>
              </h3>
              <Anchor path={`/shop/${shop.id}`}>Explore Now</Anchor>
            </div>
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        shop={shop}
      />
    </Fragment>
  );
};

export default ProductGrid;
