import ApiProductFetch from "../components/ApiProductFetch";
import HeroCarousel from "../components/HeroCarousel";
import MainNavbar from "../components/MainNavbar";
import ProductFetch from "../components/ProductFetch";
import CategoriesSection from "../components/CategoriesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <HeroCarousel />
      <ProductFetch />
      <ApiProductFetch />
      <CategoriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
