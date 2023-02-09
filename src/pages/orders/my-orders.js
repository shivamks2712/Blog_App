import { Container } from "react-bootstrap";
import { LayoutTwo } from "../../components/Layout";
import { BsBoxSeam } from "react-icons/bs";
import Anchor from "../../components/anchor";

const OrderBox = ({ element }) => {
  return (
    <div
      className="m-2 py-2 d-flex justify-content-between flex-wrap"
      style={{ borderBottom: "1px dashed grey" }}
    >
      <div className="d-flex">
        <BsBoxSeam color="green" size={30} />
        <div className="mx-3 mb-3 text-black">
          <p className="orderIdDetails pb-2 mb-0">
            <b>
              #OD125FGL-<span style={{ marginLeft: "10px" }}>₹ 256</span>
              {element % 2 == 0 ? (
                <span style={{ marginLeft: "15px", color: "green" }}>
                  <Anchor path="/">Track order</Anchor>
                </span>
              ) : (
                <span style={{ marginLeft: "15px" }}> Delivered</span>
              )}
            </b>
          </p>
          <span style={{ fontSize: "small" }}>Placed 6/02/2023 at 6:24 PM</span>
        </div>
      </div>
      <button
        className="orderViewButton p-2 mb-2"
        style={{ marginLeft: "auto" }}
      >
        <Anchor path="/orders/orderDetails/slug">View Details</Anchor>
      </button>
    </div>
  );
};

const MyAccount = () => {
  return (
    <LayoutTwo>
      <Container className="space-mt--r100 space-mb--r130">
        <div className="my-account-area__content">
          <h3>Orders</h3>
          {[1, 2, 3, 4, 5].map((element, i) => (
            <OrderBox element={element} />
          ))}
        </div>
      </Container>
    </LayoutTwo>
  );
};

export default MyAccount;
