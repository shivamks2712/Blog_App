import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Container, Row } from "react-bootstrap";
import { ProductGridWrapper } from "../ProductThumb";

const ProductTab = ({ newProducts, popularProducts, saleProducts }) => {
  return (
    <div className="product-tab space-mb--r10">
      <Container fluid>
        <Tab.Container defaultActiveKey="popular">
          <Nav
            variant="pills"
            className="product-tab__navigation text-center justify-content-center space-mb--r60"
          >
            <Nav.Item className="productTabShopCategories">
              <Nav.Link eventKey="new">Grocery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sale">Fish&Meat</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="popular">Laundary</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            {/* Shop Category 1 */}
            <Tab.Pane eventKey="new">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={newProducts}
                  bottomSpace="space-mb--r50"
                  column={4}
                />
              </Row>
            </Tab.Pane>
            {/* Shop Category 1 */}
            <Tab.Pane eventKey="popular">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={popularProducts}
                  bottomSpace="space-mb--r50"
                  column={4}
                />
              </Row>
            </Tab.Pane>
            {/* Shop Category 1 */}
            <Tab.Pane eventKey="sale">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={saleProducts}
                  bottomSpace="space-mb--r50"
                  column={4}
                />
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default ProductTab;
