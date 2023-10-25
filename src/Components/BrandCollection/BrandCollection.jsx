import { useNavigate } from "react-router-dom";
import BrandCard from "./BrandCard";

const BrandCollection = ({ brands }) => {
  const navigate = useNavigate();
  const handleProducts = (brandName) => {
    navigate(`/brandProduct/${brandName}`);
  };
  return (
    <div>
      <h2 className='text-center py-10 text-4xl'>Brand Collection</h2>
      <div className='grid md:grid-cols-3 gap-5 pb-10 px-5 lg:px-0'>
        {brands.map((brand) => (
          <BrandCard
            key={brand._id}
            brand={brand}
            handleProducts={handleProducts}
          ></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default BrandCollection;
