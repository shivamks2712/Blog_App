import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IoIosClose, IoMdCart } from "react-icons/io";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
} from "../../store/slices/cart-slice";
import { getDiscountPrice, cartItemStock } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import Anchor from "../../components/anchor";

const Cart = () => {
  const [quantityCount] = useState(1);
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  let cartTotalPrice = 0;

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <LayoutTwo>
      {/* cart content */}
      <div className="cart-content space-mt--r130 space-mb--r130">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col lg={12}>
                {/* cart table */}
                <table className="cart-table">
                  <tbody className="p-2">
                    <tr className="d-flex justify-content-between align-items-center ">
                      <td className="product-thumbnail">Product</td>
                      <td className="product-name ">Name</td>

                      <td className="product-price cart-product-header-price">
                        Price
                      </td>

                      <td className="product-price">Quantity</td>

                      <td className="total-price">Total </td>

                      <td className="product-remove"></td>
                    </tr>
                    {cartItems.map((product, i) => {
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);

                      cartTotalPrice += discountedPrice * product.quantity;
                      return (
                        <tr
                          className="d-flex justify-content-between align-items-center"
                          key={i}
                        >
                          <td className="product-thumbnail">
                            <Anchor
                              path={`/shop/product-basic/${product.slug}`}
                            >
                              <img
                                src={
                                  process.env.PUBLIC_URL + product.thumbImage[0]
                                }
                                className="img-fluid mx-1"
                                alt=""
                              />
                            </Anchor>
                          </td>
                          <td className="product-name">
                            <Anchor
                              path={`/shop/product-basic/${product.slug}`}
                            >
                              {product.name}
                            </Anchor>
                          </td>

                          <td className="product-price">
                            <span className="price">${discountedPrice}</span>
                          </td>

                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <button
                                className="dec qtybutton"
                                onClick={() =>
                                  dispatch(decreaseQuantity(product))
                                }
                              >
                                -
                              </button>
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                value={product.quantity}
                                readOnly
                              />
                              <button
                                className="inc qtybutton"
                                onClick={() =>
                                  dispatch(
                                    addToCart({
                                      ...product,
                                      quantity: quantityCount,
                                    })
                                  )
                                }
                                disabled={
                                  product !== undefined &&
                                  product.quantity &&
                                  product.quantity >=
                                    cartItemStock(
                                      product,
                                      product.selectedProductColor,
                                      product.selectedProductSize
                                    )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>

                          <td className="total-price">
                            <span className="price">
                              ${(discountedPrice * product.quantity).toFixed(2)}
                            </span>
                          </td>

                          <td className="product-remove">
                            <button
                              onClick={() =>
                                dispatch(deleteFromCart(product.cartItemId))
                              }
                            >
                              <IoIosClose />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Col>

              <Col lg={5} className="ms-auto mt-4">
                <div className="cart-calculation-area">
                  <h2 className="space-mb--40">Cart total</h2>
                  <p>
                    TOTAL
                    <span style={{ float: "right" }}>
                      ${cartTotalPrice.toFixed(2)}
                    </span>
                  </p>
                  <div className="cart-calculation-button text-center">
                    <Anchor
                      path="/user/checkout"
                      className="lezada-button lezada-button--small mt-4"
                    >
                      proceed to checkout
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCart />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in cart</p>
                    <Anchor
                      path="/"
                      className="lezada-button lezada-button--medium"
                    >
                      Shop Now
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default Cart;
