import { BsShop } from "react-icons/bs";
export default function () {
  const logoDesign = {
    // backgroundColor: "blue",
    width: "fit-content",
    padding: "3px",
  };
  return (
    <div
      style={logoDesign}
      className="d-flex py-2 justify-content-center align-items-baseline fw-bold"
    >
      <BsShop color="orange" size={20} />
      <p style={{ color: "orange", paddingLeft: "5px", fontSize: "18px" }}>
        shop<span style={{ color: "green" }}>27</span>
      </p>
    </div>
  );
}
