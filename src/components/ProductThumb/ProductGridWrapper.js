import { Fragment } from "react";
import ProductGrid from "./ProductGrid";

const ProductGridWrapper = ({ products, bottomSpace, column }) => {
  return (
    <Fragment>
      {products &&
        products.map((shop) => {
          return (
            <ProductGrid
              key={shop.id}
              shop={shop}
              bottomSpace={bottomSpace}
              column={column}
            />
          );
        })}
    </Fragment>
  );
};

export default ProductGridWrapper;
