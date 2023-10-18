const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const image = form.get("image");
    const name = form.get("name");
    const brandName = form.get("brandName");
    const price = form.get("price");
    const rating = form.get("rating");
    const category = form.get("category");
    const description = form.get("description");

    const newProduct = {
      image,
      name,
      brandName,
      price,
      rating,
      category,
      description,
    };
    e.target.reset();
    console.log(newProduct);
  };
  return (
    <div className='pt-10'>
      <div className='w-full  p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <form className='space-y-6' onSubmit={handleAddProduct}>
          <h5 className='text-xl text-center font-medium text-gray-900 dark:text-white'>
            Add New Product
          </h5>
          <div className='grid md:grid-cols-2 gap-10 px-16'>
            {/* product image  */}
            <div>
              <label
                htmlFor='image'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product Image
              </label>
              <input
                type='text'
                name='image'
                id='image'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='Enter Image Url'
                required
              />
            </div>

            {/* product name  */}
            <div>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Product Name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
            </div>
            {/* Brand name  */}
            <div>
              <label
                htmlFor='brandName'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Brand Name
              </label>
              <input
                type='text'
                name='brandName'
                id='brandName'
                placeholder='Brand Name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
            </div>
            {/* Product Price  */}
            <div>
              <label
                htmlFor='price'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product Price
              </label>
              <input
                type='number'
                name='price'
                id='price'
                placeholder='$ Price'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
            </div>

            {/* Product Rating  */}
            <div>
              <label
                htmlFor='rating'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product rating
              </label>
              <input
                type='number'
                name='rating'
                id='rating'
                placeholder='Rate Between 1-5'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
            </div>
            {/* Product Category  */}
            <div>
              <label
                htmlFor='category'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Product Category
              </label>

              <select
                name='category'
                id='category'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              >
                <option>Select a Category</option>
                <option value='shoe'>Shoe</option>
                <option value='watch'>Watch</option>
                <option value='cloth'>Cloth</option>
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
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
