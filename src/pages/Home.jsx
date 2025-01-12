import ApiProductFetch from "../components/ApiProductFetch";
import HeroCarousel from "../components/HeroCarousel";
import MainNavbar from "../components/MainNavbar";
import ProductFetch from "../components/ProductFetch";

const Home = () => {
  return (
    <div className="pb-48">
      <MainNavbar />
      <HeroCarousel />
      <ProductFetch />
      <ApiProductFetch />
    </div>
  );
};

export default Home;
