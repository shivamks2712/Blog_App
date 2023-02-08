import { Container } from "react-bootstrap";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  speed: 1000,
  spaceBetween: 200,
  navigation: false,
  grabCursor: true,
  autoplay: {
    delay: 2000,
  },
};

const ImageSliderOffers = () => {
  return (
    <div className="my-3">
      <Container fluid className="p-0 m-0">
        <Swiper options={params}>
          {[1, 2, 3, 4].map((single, i) => {
            return (
              <SwiperSlide
                className="imageSliderOfferSwiper single-image text-center"
                key={i}
              >
                {/* <Anchor className="imageSliderOfferAnchorImg"> */}
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-11/Winter_FB-masthead-WEB.png"
                  className="img-fluid"
                  alt=""
                />
                {/* </Anchor> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default ImageSliderOffers;
