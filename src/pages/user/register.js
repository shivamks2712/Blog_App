import { Container, Row, Col } from "react-bootstrap";
import { LayoutTwo } from "../../components/Layout";
import Anchor from "../../components/anchor";

const LoginRegister = () => {
  return (
    <LayoutTwo>
      <div className="login-area space-mt--30 ">
        <Container>
          <Row>
            <Col lg={6}>
              <div
                className="lezada-form login-form--register"
                style={{ paddingTop: 0 }}
              >
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--30">
                        <h2 className="space-mb--20">Register</h2>
                        <p>If you don’t have an account, register now!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--20">
                      <label htmlFor="userName">
                        Name <span className="required">*</span>{" "}
                      </label>
                      <input type="text" id="userName" required />
                    </Col>
                    <Col lg={12} className="space-mb--20">
                      <label htmlFor="phoneNum">
                        Phone Number <span className="required">*</span>{" "}
                      </label>
                      <br />
                      <br />
                      <select
                        style={{
                          paddingBottom: "0.5px",
                          border: "none",
                          borderBottom: "1px solid black",
                        }}
                        name="phcode"
                        id="phcode"
                      >
                        <option value="+91">+91</option>
                        <option value="+01">+01</option>
                        <option value="+06">+06</option>
                        <option value="+92">+92</option>
                      </select>
                      <input
                        style={{
                          border: "none",
                          borderBottom: "1px solid black",
                        }}
                        type="tel"
                        pattern="[6-9]{10}"
                        id="phoneNum"
                        required
                      />
                    </Col>
                    <Col lg={12} className="space-mb--20">
                      <label htmlFor="regEmail">
                        Email Address <span className="required">*</span>{" "}
                      </label>
                      <input type="text" id="regEmail" required />
                    </Col>
                    <Col lg={12} className="space-mb--20">
                      <label htmlFor="regPassword">
                        Password <span className="required">*</span>{" "}
                      </label>
                      <input type="password" id="regPassword" required />
                    </Col>
                    <Col lg={12} className="space-mb--20">
                      <label htmlFor="regEmail">
                        Confirm Password <span className="required">*</span>{" "}
                      </label>
                      <input type="text" id="cnfmPass" required />
                    </Col>
                    <Container fluid>
                      <Row>
                        <Col lg={6} xs={6}></Col>
                        <Col lg={6} xs={6} style={{ fontSize: "12px" }}>
                          Already a Customer?
                        </Col>
                      </Row>
                    </Container>
                    <Container fluid>
                      <Row>
                        <Col lg={6} xs={6}>
                          <button className="lezada-button lezada-button--medium w-100 text-center">
                            register
                          </button>
                        </Col>
                        <Col lg={6} xs={6}>
                          <Anchor
                            className="lezada-button lezada-button--medium w-100 text-center"
                            path="/user/login"
                          >
                            login
                          </Anchor>
                        </Col>
                      </Row>
                    </Container>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default LoginRegister;
