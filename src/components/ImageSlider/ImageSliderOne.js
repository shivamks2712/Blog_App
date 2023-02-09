import { Container, Row, Col, Anchor } from "react-bootstrap";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 24,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

const ImageSliderOne = ({ imageSliderData }) => {
  return (
    <div className="image-slider-area space-mb--r130">
      <Container className="wide">
        <Row>
          <Col lg={6} className="text-center">
            {!!imageSliderData?.length && (
              <Swiper options={params}>
                {imageSliderData.map((single, i) => (
                  <SwiperSlide className="single-image text-center" key={i}>
                    <a target="_blank">
                      <img
                        style={{ width: "80px", height: "80px" }}
                        src={"process.env.PUBLIC_URL + single.image"}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageSliderOne;
