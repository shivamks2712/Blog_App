import { Container, Row, Col } from "react-bootstrap";
import {
  getIndividualCategories,
  getIndividualTags,
  setActiveSort,
} from "../../lib/product";

const ShopFilter = ({ products, getSortParams }) => {
  const categories = getIndividualCategories(products);
  const tags = getIndividualTags(products);

  return (
    <div className="shop-advance-filter">
      <Container className="space-pt--50 space-pb--50">
        <Row>
          <Col lg={6} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Categories</h2>
              {categories.length > 0 ? (
                <div className="tag-container">
                  {categories.map((category, i) => {
                    return (
                      <button
                        key={i}
                        onClick={(e) => {
                          getSortParams("category", category);
                          setActiveSort(e);
                        }}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              ) : (
                "No tags found"
              )}
            </div>
          </Col>

          <Col lg={6} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Tags</h2>
              {tags.length > 0 ? (
                <div className="tag-container">
                  {tags.map((tag, i) => {
                    return (
                      <button
                        key={i}
                        onClick={(e) => {
                          getSortParams("tag", tag);
                          setActiveSort(e);
                        }}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              ) : (
                "No tags found"
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopFilter;
