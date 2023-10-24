import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
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
            <div className='badge badge-secondary'>{brand_name}</div>
          </h2>
          <p className=' font-semibold'>Type : {category}</p>
          <p className=' font-semibold'>Price : ${product_price}</p>
          <p className=' font-semibold'>Rating : {product_rating}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-success'>Details</button>
            <Link
              to={`/updateProduct/${_id}`}
              className='btn btn-success btn-outline'
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
