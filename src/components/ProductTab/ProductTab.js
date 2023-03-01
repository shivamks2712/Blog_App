import { Container, Row } from "react-bootstrap";
import { ProductGridWrapper } from "../ProductThumb";
import Paginator from "react-hooks-paginator";
import { useState, useEffect } from "react";
import { loadPageTransationId } from "../../axiosCall/onLoad";
import { useDispatch, useSelector } from "react-redux";
import { setShops } from "../../store/slices/shop-slice";

const ProductTab = () => {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { shops } = useSelector((state) => state.shop);

  useEffect(() => {
    loadPageTransationId(setShops, dispatch);
  }, []);
  return (
    <div className="product-tab space-mb--r10">
      <center className="my-5 text-black">
        <b>Shops Near You </b>{" "}
      </center>
      <Container fluid>
        {/* Shop Category 1 */}

        <Row className="space-mb--rm50">
          <ProductGridWrapper
            products={shops}
            bottomSpace="space-mb--r50"
            column={4}
          />
          <div className="pro-pagination-style">
            <Paginator
              totalRecords={shops.length}
              pageLimit={16}
              pageNeighbours={2}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageContainerClass="mb-0 mt-0"
              pagePrevText="«"
              pageNextText="»"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ProductTab;
