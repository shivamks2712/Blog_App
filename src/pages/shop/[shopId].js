import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { SlideDown } from "react-slidedown";
import { LayoutOne } from "../../components/Layout";
import { ShopHeader, ShopFilter, ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";
import { useRouter } from "next/router";
import { getStoreItems } from "../../axiosCall/onLoad";
import { setItems } from "../../store/slices/item-slice";

const NoSidebar = () => {
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
  const pageLimit = 24;

  const { items } = useSelector((state) => state.item);

  const dispatch = useDispatch();
  const router = useRouter();
  const { shopId } = router.query;

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    if (shopId) getStoreItems(shopId, setItems, dispatch, "");
  }, [shopId]);

  useEffect(() => {
    let sortedProducts = getSortedProducts(items, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, items, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <LayoutOne searchDisplay={2}>
      {/* breadcrumb */}
      <div className="shop-page-content">
        {/* shop page header */}
        <ShopHeader
          getFilterSortParams={getFilterSortParams}
          productCount={items.length}
          sortedProductCount={currentData.length}
          shopTopFilterStatus={shopTopFilterStatus}
          setShopTopFilterStatus={setShopTopFilterStatus}
        />

        {/* shop header filter */}

        {/* <SlideDown closed={shopTopFilterStatus ? false : true}>
          <ShopFilter products={items} getSortParams={getSortParams} />
        </SlideDown> */}

        {/* shop page body */}
        <div className="shop-page-content__body space-mt--r130 space-mb--r130">
          <Container>
            <Row>
              <Col>
                {/* shop products */}
                <ShopProducts products={items} />

                {/* shop product pagination */}
                <div className="pro-pagination-style">
                  <Paginator
                    totalRecords={items.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutOne>
  );
};

export default NoSidebar;
