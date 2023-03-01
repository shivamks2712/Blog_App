import { Modal, Row, Col } from "react-bootstrap";
import { ProductRating } from "../Product";
import Swiper, { SwiperSlide } from "../swiper";
import { MdLocationPin, MdPhone } from "react-icons/md";
import Anchor from "../anchor";

const gallerySwiperParams = {
  pagination: true,
  navigation: true,
};

const ProductModal = (props) => {
  const { shop } = props;

  if (shop)
    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        className="product-quickview"
        centered
      >
        <Modal.Body>
          <Modal.Header closeButton></Modal.Header>
          <Row>
            <Col md={6} sm={12}>
              {shop && shop.items.length ? (
                <Swiper options={gallerySwiperParams}>
                  {shop.items.map((single, key) => (
                    <SwiperSlide key={key} style={{ textAlign: "center" }}>
                      <img
                        src={single.symbol}
                        alt=""
                        className="p-2 productModalImageSlides"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : null}
            </Col>
            <Col md={6} sm={12} className="ms-auto">
              {/* <CustomScroll allowOuterScroll={true}> */}
              <div className="product-quickview__content bg-white">
                <h2 className="product-quickview__title space-mb--20 text-black">
                  {shop.store.name}

                  {shop.rating && shop.rating > 0 ? (
                    <div className="product-quickview__rating-wrap space-mb--20">
                      <div className="product-quickview__rating">
                        <ProductRating ratingValue={shop.rating} />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </h2>
                <p>
                  <MdPhone color="black" size={20} className="mx-2" />
                  {shop.store.phone}
                  <MdLocationPin
                    color="black"
                    size={20}
                    className="ms-3 me-1"
                  />
                  {(shop.address + " " + shop.city).substring(0, 45)}
                </p>

                <div className="product-quickview__description space-mb--30">
                  <p className="fs-6">
                    {shop.store.short_description.substring(0, 50)}
                  </p>
                </div>

                <Anchor
                  className="lezada-button lezada-button--medium product-quickview__ofs space-mr--10"
                  path={`/shop/${shop.id}`}
                >
                  Shop Now
                </Anchor>
              </div>
              {/* </CustomScroll> */}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  else return "";
};

export default ProductModal;
