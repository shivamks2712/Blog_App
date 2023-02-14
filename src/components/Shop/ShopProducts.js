import { ProductGridListWrapper } from "../../components/ProductThumb";
import { Row } from "react-bootstrap";

const ShopProducts = ({ products }) => {
  return (
    <div className="shop-products">
      <Row className="d-flex justify-content-start">
        <ProductGridListWrapper
          products={products}
          bottomSpace="space-mb--50"
        />
      </Row>
    </div>
  );
};

export default ShopProducts;
