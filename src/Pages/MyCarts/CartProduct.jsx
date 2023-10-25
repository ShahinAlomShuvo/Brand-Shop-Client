import Swal from "sweetalert2";

const CartProduct = ({ product, updatedProducts, setUpdatedProducts }) => {
  const {
    _id,
    brand_name,
    category,
    image_url,
    product_name,
    product_price,
    product_rating,
  } = product;

  const deleteHandler = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-eta.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainingProduct = updatedProducts.filter(
                (updatedProduct) => updatedProduct._id !== _id
              );
              setUpdatedProducts(remainingProduct);
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

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
          <div className='card-actions '>
            <button
              onClick={() => deleteHandler(_id)}
              className='btn btn-success'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
