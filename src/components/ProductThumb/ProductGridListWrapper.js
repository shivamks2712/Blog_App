import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridList from "./ProductGridList";
import { getDiscountPrice } from "../../lib/product";

const ProductGridWrapper = ({ products, bottomSpace }) => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Fragment>
      {products &&
        products.map((product) => {
          const discountedPrice = product.value.toFixed(2);
          const productPrice = product.maximum_value.toFixed(2);
          const stock = product.available;
          const cartItem = cartItems.find(
            (cartItem) => cartItem.id === product.id
          );

          return (
            <ProductGridList
              key={product.id}
              product={product}
              discountedPrice={discountedPrice}
              productPrice={productPrice}
              cartItem={cartItem}
              bottomSpace={bottomSpace}
              stock={stock}
            />
          );
        })}
    </Fragment>
  );
};

export default ProductGridWrapper;
