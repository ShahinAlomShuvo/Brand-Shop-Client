import { useLoaderData } from "react-router-dom";
import BrandCollection from "../../Components/BrandCollection/BrandCollection";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className='container mx-auto'>
        <BrandCollection brands={brands}></BrandCollection>
      </div>
    </div>
  );
};

export default Home;
