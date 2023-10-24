import { useLoaderData } from "react-router-dom";
import BrandCollection from "../../Components/BrandCollection/BrandCollection";
import Banner from "../../Components/Header/Banner/Banner";
import ClientReviews from "../../Components/ClientReviews/ClientReviews";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className='container mx-auto'>
        <BrandCollection brands={brands}></BrandCollection>
      </div>
      <ClientReviews></ClientReviews>
    </div>
  );
};

export default Home;
