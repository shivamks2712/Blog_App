import { Container } from "react-bootstrap";
import { LayoutTwo } from "../../../components/Layout";
import { BiDownload, BiSupport } from "react-icons/bi";
const orderSpanDetail = {
  fontWeight: "500",
  fontSize: "12px",
  paddingLeft: "2px",
};

const OrderItem = () => {
  return (
    <Container className="d-flex align-items-center py-2 justify-content-between text-black">
      <div className="d-flex ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5FeyE6uRj2jeiVf4lChDmIVi5Ncqqtb1h6j0HC4lhA&s"
          width={"40px"}
          height={"40px"}
          alt=""
        />
        <p className="mx-3 fw-semibold">
          Tomato <br />
          <span style={orderSpanDetail}>500g x 1 </span>
        </p>
      </div>
      <b> ₹ 38</b>
    </Container>
  );
};

const OrderDetails = () => {
  return (
    <LayoutTwo>
      <div className="my-account-area space-mt--r100 space-mb--r130 ">
        <Container>
          <div className="my-account-area__content  px-0">
            <div className="supportNav d-flex justify-content-between text-black mx-0 py-0 mb-0 px-3">
              <p className="slugOrder_id">
                ORDO0861331
                <br />
                <span>{false ? "Arrived at 8:23 pm" : "On the way"}</span>
              </p>
              <p>
                Deliver to
                <br />
                <span>
                  {"Rohini sec-16 G2-12/13 first floor".substring(0, 16) +
                    " ..."}
                </span>
              </p>
              <p>
                <BiSupport /> Need help?
                <br />
                <span>Contact with us</span>
              </p>
            </div>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <div
              style={{ borderTop: "1px solid grey" }}
              className="d-flex justify-content-between text-black mt-2 py-3 pb-0 px-2"
            >
              <b> Total Items 4 </b>
              <b> ₹ 158</b>
            </div>
          </div>
        </Container>
        <Container className="my-3  text-black">
          <div className="my-account-area__content">
            <b>
              Download Bill
              <BiDownload fontSize={18} color="green" className="mx-5" />
            </b>
            <hr />
            <p className="my-3 fs-6" style={{ fontWeight: 500 }}>
              Mrp <span style={{ float: "right" }}>₹ 200</span>
            </p>
            <p className="my-3 fs-6" style={{ fontWeight: 500 }}>
              Discount{" "}
              <span style={{ color: "blue", float: "right" }}>-₹ 60</span>
            </p>
            <p className="my-3 fs-6" style={{ fontWeight: 500 }}>
              Delievery Charges <span style={{ float: "right" }}>+₹ 80</span>
            </p>

            <p className="my-3 fs-6" style={{ fontWeight: 500 }}>
              Total Pay <span style={{ float: "right" }}>+₹ 220</span>
            </p>
          </div>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default OrderDetails;
