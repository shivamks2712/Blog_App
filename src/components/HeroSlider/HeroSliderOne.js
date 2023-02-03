import { Container } from "react-bootstrap";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  speed: 1000,
  spaceBetween: 200,
  navigation: true,
  autoplay: {
    delay: 2500,
  },
};

const HeroSliderOne = ({ sliderData }) => {
  return (
    <div className="hero-slider-one space-mb--r100">
      <Container fluid className="p-0 m-0">
        <div className="hero-slider-one__wrapper">
          {sliderData.length ? (
            <Swiper options={params}>
              {sliderData.map((single) => {
                return (
                  <SwiperSlide
                    className="hero-slider-one__slide"
                    key={single.id}
                  >
                    <div className="slider-image">
                      <img
                        src={process.env.PUBLIC_URL + single.image}
                        className="img-fluid heroSlideOneBannerImage"
                        alt=""
                      />
                    </div>
                    <div className="slider-content">
                      <h2
                        className={`color-title  heroSliderOneSubTitle ${
                          single.id == 3 ? "text-black" : ""
                        } `}
                      >
                        {single.subtitle}
                      </h2>
                      <h1
                        className={`main-title space-mb--20 heroSliderOneBannerTitle heroslidebanner-id-${single.id}`}
                        dangerouslySetInnerHTML={{ __html: single.title }}
                      />
                      <Anchor
                        path={single.url}
                        className="lezada-button lezada-button--medium "
                        style={{ marginLeft: "20px" }}
                      >
                        order now
                      </Anchor>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default HeroSliderOne;
