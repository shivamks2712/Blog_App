import { Container, Row, Col } from "react-bootstrap";
import { LayoutTwo } from "../../components/Layout";

import Anchor from "../../components/anchor";

const LoginRegister = () => {
  return (
    <LayoutTwo>
      <div className="login-area space-mt--30 ">
        <Container fluid>
          <Row>
            <Col lg={6} className="space-mb--30">
              <div className="lezada-form login-form">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--20">
                        <h2 className="space-mb--20">Login</h2>
                        <p>Great to have you back!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <input
                        type="text"
                        placeholder="Username or email address"
                        required
                      />
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <input type="password" placeholder="Password" required />
                    </Col>
                    <Container fluid>
                      <Row>
                        <Col lg={6} xs={6}></Col>
                        <Col lg={6} xs={6} style={{ fontSize: "14px" }}>
                          New User
                        </Col>
                      </Row>
                    </Container>
                    <Container fluid>
                      <Row>
                        <Col lg={6} xs={6}>
                          <Anchor
                            className="lezada-button lezada-button--medium w-100 text-center"
                            path="/user/login"
                          >
                            login
                          </Anchor>
                        </Col>
                        <Col lg={6} xs={6}>
                          <Anchor
                            path="/user/register"
                            className="lezada-button lezada-button--medium w-100 text-center"
                          >
                            register
                          </Anchor>
                        </Col>
                      </Row>
                    </Container>
                    <Col>
                      <input type="checkbox" />{" "}
                      <span className="remember-text">Remember me</span>
                      <a href="#" className="reset-pass-link">
                        Lost your password?
                      </a>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>

            {/* <Col
              lg={6}
              // className="space-mb-mobile-only--50"
              style={{ display: window.screen.width < 992 ? "none" : "block" }}
            >
              <div
                style={{
                  display: "flex",
                  overflow: "hidden",
                  height: "80%",
                  justifyContent: "center",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <img
                  height={"450px"}
                  src="https://t3.ftcdn.net/jpg/02/28/87/62/360_F_228876249_pfyLC3Kn976HOyHgzlQ5L2oH4CcYYMyD.jpg"
                  alt=""
                />
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default LoginRegister;
