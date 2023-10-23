const BrandCard = ({ brand, handleProducts }) => {
  const { brand_name, image_url } = brand;
  const handleBrandProducts = () => {
    handleProducts(brand_name);
  };
  return (
    <div>
      <div
        onClick={handleBrandProducts}
        className='card bg-base-100 shadow-xl image-full'
      >
        <figure className='h-64'>
          <img className='h-full w-full' src={image_url} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{brand_name}</h2>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
