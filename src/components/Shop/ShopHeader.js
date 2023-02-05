import { Container, Row, Col } from "react-bootstrap";
import { IoMdFunnel, IoMdSearch } from "react-icons/io";
import clsx from "clsx";
import { setActiveLayout } from "../../lib/product";

const ShopHeader = ({
  shopTopFilterStatus,
  setShopTopFilterStatus,
  getFilterSortParams,
  sortedProductCount,
  productCount,
  layoutClass,
}) => {
  const shopHeaderSearch = {
    width: "100%",
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    marginTop: "10px",
  };
  return (
    <div className="shop-header">
      <Container className={clsx(layoutClass)}>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            Showing {sortedProductCount} of {productCount} result
          </Col>

          <Col md={6} className="d-flex justify-content-around">
            <div className="shop-header__filter-icons justify-content-center justify-content-md-end">
              <div className="single-icon filter-dropdown">
                <select
                  onChange={(e) =>
                    getFilterSortParams("filterSort", e.target.value)
                  }
                >
                  <option value="relevance">Relevance</option>
                  <option value="priceHighToLow">Price - High to Low</option>
                  <option value="priceLowToHigh">Price - Low to High</option>
                </select>
              </div>

              <div className="single-icon advance-filter-icon">
                <button
                  onClick={() => setShopTopFilterStatus(!shopTopFilterStatus)}
                  className={shopTopFilterStatus ? "active" : ""}
                >
                  <IoMdFunnel /> Filter
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopHeader;
