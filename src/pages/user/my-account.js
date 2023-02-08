import { Container, Col, Row } from "react-bootstrap";
import { LayoutTwo } from "../../components/Layout";
import { BsBoxSeam } from "react-icons/bs";
const OrderBox = ({ element }) => {
  return (
    <div
      className="m-2 py-3 d-flex justify-content-between flex-wrap"
      style={{ borderBottom: "1px dashed grey" }}
    >
      <div className="d-flex">
        <BsBoxSeam color="green" size={30} />
        <div className="mx-3 mb-3 text-black">
          <p className="pb-2">
            <b>
              Order ID .<span style={{ marginLeft: "10px" }}>₹ 256</span>
              <span style={{ marginLeft: "15px" }}>
                {element % 2 == 0 ? "Track order" : "Delievered"}
              </span>
            </b>
          </p>
          6/02/2023 at 6:24 PM
        </div>
      </div>
      <button className="orderViewButton p-2" style={{ marginLeft: "auto" }}>
        View Details
      </button>
    </div>
  );
};

const MyAccount = () => {
  return (
    <LayoutTwo>
      <div className="my-account-area space-mt--r130 space-mb--r130">
        <Container>
          <div className="my-account-area__content">
            <h3>Orders</h3>
            {[1, 2, 3, 4, 5].map((element, i) => (
              <OrderBox element={element} />
            ))}
          </div>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default MyAccount;
