import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
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

  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const image_url = form.get("image");
    const product_name = form.get("name");
    const brand_name = form.get("brandName");
    const product_price = form.get("price");
    const product_rating = form.get("rating");
    const category = form.get("category");
    const short_description = form.get("description");

    const updateProduct = {
      image_url,
      product_name,
      brand_name,
      product_price,
      product_rating,
      category,
      short_description,
    };
    e.target.reset();

    fetch(`https://brand-shop-eta.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Product Update Successfully");
          navigate(-1);
        }
      });
  };
  return (
    <div className='pt-10'>
      <div className='w-full  p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <form className='space-y-6' onSubmit={handleAddProduct}>
          <h5 className='text-xl text-center font-medium text-gray-900 dark:text-white'>
            Update Product
          </h5>
          <div className='grid md:grid-cols-2 gap-10 px-16'>
            {/* product image  */}
            <div className='col-span-2 md:col-span-1'>
              <label
                htmlFor='image'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product Image
              </label>
              <input
                defaultValue={image_url}
                type='text'
                name='image'
                id='image'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='Enter Image Url'
                required
              />
            </div>

            {/* product name  */}
            <div className='col-span-2 md:col-span-1'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product Name
              </label>
              <input
                defaultValue={product_name}
                type='text'
                name='name'
                id='name'
                placeholder='Product Name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
            </div>
            {/* Brand name  */}
            <div className='col-span-2 md:col-span-1'>
              <label
                htmlFor='brandName'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Brand Name
              </label>
              <input
                defaultValue={brand_name}
                type='text'
                name='brandName'
                id='brandName'
                placeholder='Brand Name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
            </div>
            {/* Product Price  */}
            <div className='col-span-2 md:col-span-1'>
              <label
                htmlFor='price'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product Price
              </label>
              <input
                defaultValue={product_price}
                type='number'
                name='price'
                id='price'
                placeholder='$ Price'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
            </div>

            {/* Product Rating  */}
            <div className='col-span-2 md:col-span-1'>
              <label
                htmlFor='rating'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product rating
              </label>
              <input
                defaultValue={product_rating}
                type='number'
                name='rating'
                id='rating'
                placeholder='Rate Between 1-5'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
            </div>
            {/* Product Category  */}
            <div className='col-span-2 md:col-span-1'>
              <label
                htmlFor='category'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product Category
              </label>

              <select
                defaultValue={category}
                name='category'
                id='category'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              >
                <option>Select a Category</option>
                <option value='shoe'>Shoe</option>
                <option value='watch'>Watch</option>
                <option value='cloth'>Cloth</option>
                <option value='cloth'>Bags</option>
              </select>
            </div>
            {/* Short Description */}
            <div className='col-span-2'>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Description about Product :
              </label>
              <textarea
                defaultValue={short_description}
                name='description'
                id='description'
                placeholder='Describe the product...'
                rows='4'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
