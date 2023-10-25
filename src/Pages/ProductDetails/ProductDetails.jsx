import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    _id,
    brand_name,
    category,
    image_url,
    product_name,
    product_price,
    product_rating,
    short_description,
  } = product;

  const addProductHandler = (product) => {
    fetch("https://brand-shop-eta.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Added Successfully");
        }
      });
  };
  return (
    <div className='flex justify-center py-10'>
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href='#'>
          <img
            className='w-full rounded-lg'
            src={image_url}
            alt='product image'
          />
        </a>
        <div className='px-5 pb-5 pt-3'>
          <a href='#'>
            <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              {product_name}
            </h5>
          </a>
          <div className='flex items-center mt-2.5 mb-5'>
            <span className='text-white'>Rating:</span>
            <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
              {product_rating}
            </span>
          </div>
          <div className='py-2 text-white'>
            <p>{short_description}</p>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-3xl font-bold text-gray-900 dark:text-white'>
              ${product_price}
            </span>
            <button
              onClick={() => addProductHandler(product)}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
