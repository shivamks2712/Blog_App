import { LayoutOne } from "../components/Layout";
import { HeroSliderOne } from "../components/HeroSlider";
import { ProductTab } from "../components/ProductTab";
import heroSliderData from "../data/hero-sliders/hero-slider-one.json";

const Home = () => {
  return (
    <LayoutOne aboutOverlay={false} searchDisplay={1}>
      {/* hero slider */}
      <HeroSliderOne sliderData={heroSliderData} />
      {/* product tab */}
      <ProductTab />
      {/* image cta */}
    </LayoutOne>
  );
};

export default Home;
