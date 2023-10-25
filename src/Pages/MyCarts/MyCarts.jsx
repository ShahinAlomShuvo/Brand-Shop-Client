import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const MyCarts = () => {
  const cartProduct = useLoaderData();
  const [updatedProducts, setUpdatedProducts] = useState(cartProduct);
  return (
    <div>
      {updatedProducts?.length ? (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto py-5 px-5 lg:px-0'>
          {updatedProducts.map((product) => (
            <CartProduct
              key={product._id}
              product={product}
              updatedProducts={updatedProducts}
              setUpdatedProducts={setUpdatedProducts}
            ></CartProduct>
          ))}
        </div>
      ) : (
        <p className='text-center py-20'>No Product Added</p>
      )}
    </div>
  );
};

export default MyCarts;
