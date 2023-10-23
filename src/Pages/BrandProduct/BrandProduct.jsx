import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandProduct = () => {
  const { brandName } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (brandName) {
      fetch(`http://localhost:5000/products?brand_name=${brandName}`)
        .then((response) => response.json())
        .then((data) => {
          setProductData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [brandName]);

  return (
    <div>
      {productData ? (
        <div className='grid md:grid-cols-3 gap-10 container mx-auto  py-10'>
          {productData.map((product, idx) => (
            <ProductCard key={idx} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <p>No products Available here</p>
      )}
    </div>
  );
};

export default BrandProduct;
