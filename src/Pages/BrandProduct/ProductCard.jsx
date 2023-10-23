const ProductCard = ({ product }) => {
  const {
    brand_name,
    category,
    image_url,
    product_name,
    product_price,
    product_rating,
  } = product;
  return (
    <div>
      <div className='card  bg-base-100 shadow-xl'>
        <figure className='h-96'>
          <img className='h-full w-full' src={image_url} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            {product_name}
            <div className='badge badge-secondary'>Brand : {brand_name}</div>
          </h2>
          <p className=' font-semibold'>Type : {category}</p>
          <p className=' font-semibold'>Price : ${product_price}</p>
          <p className=' font-semibold'>Rating : {product_rating}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-outline'>Details</button>
            <button className='btn btn-outline'>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
