import useScrollTop from "../../hooks/use-scroll-top";
const ScrollToTop = () => {
  const { stick, onClickHandler } = useScrollTop();
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
