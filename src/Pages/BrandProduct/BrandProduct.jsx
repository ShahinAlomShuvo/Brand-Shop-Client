import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

const BrandProduct = () => {
  const { brandName } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (brandName) {
      fetch(
        `https://brand-shop-eta.vercel.app/products?brand_name=${brandName}`
      )
        .then((response) => response.json())
        .then((data) => {
          setProductData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [brandName]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className='overflow-hidden'>
        <Slider {...settings}>
          {productData?.map((product) => (
            <div key={product._id}>
              <div className='absolute inset-0 bg-black bg-opacity-5  z-10'></div>
              <img
                className='w-full h-[500px]'
                src={product.image_url}
                alt=''
              />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        {productData?.length > 0 ? (
          <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 container mx-auto  py-20 px-5 lg:px-0'>
            {productData.map((product, idx) => (
              <ProductCard key={idx} product={product}></ProductCard>
            ))}
          </div>
        ) : (
          <p className='text-center py-20'>No products Available here</p>
        )}
      </div>
    </div>
  );
};

export default BrandProduct;
