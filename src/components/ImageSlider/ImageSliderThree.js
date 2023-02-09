import { Container, Row, Col } from "react-bootstrap";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  // navigaton: true,
  autoplay: {
    disableOnInteraction: false,
    delay: 2000,
  },
};

const ImageSliderThree = ({ imageSliderData }) => {
  return (
    <div className="p-0">
      <Container className=" px-0 mx-0">
        {!!imageSliderData.length && (
          <Swiper options={params}>
            {imageSliderData.map((single, i) => (
              <SwiperSlide key={i}>
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg"
                  className="img-fluid cart-image-slider"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </div>
  );
};

export default ImageSliderThree;
