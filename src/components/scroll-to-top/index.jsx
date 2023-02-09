import useScrollTop from "../../hooks/use-scroll-top";
const ScrollToTop = () => {
  const { stick } = useScrollTop();
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (stick) {
    return (
      <button
        aria-label="Scroll to top"
        type="button"
        className="scroll-top"
        onClick={onClickHandler}
      >
        &#129057;
      </button>
    );
  }
  return null;
};

export default ScrollToTop;
