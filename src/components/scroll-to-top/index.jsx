import useScrollTop from "../../hooks/use-scroll-top";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const ScrollToTop = () => {
  const { stick } = useScrollTop();
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const btnScrollTop = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid black",
  };
  if (stick) {
    return (
      <BsFillArrowUpCircleFill
        size={12}
        style={btnScrollTop}
        className="scroll-top"
        onClick={onClickHandler}
      />
    );
  }
  return null;
};

export default ScrollToTop;
