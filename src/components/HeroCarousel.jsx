import { useState, useEffect } from "react";
import Shopping1 from "../assets/img/Shopping1.jpg";
import Shopping2 from "../assets/img/Shopping2.jpg";
import Shopping3 from "../assets/img/Shopping3.jpg";
import Shopping4 from "../assets/img/Shopping4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: Shopping1,
    text: "Welcome to DiMe Dwa – Your Trusted Shopping Destination",
    description:
      "We bring you a curated collection of high-quality products tailored to suit your every need. Experience convenience like never before!",
  },
  {
    src: Shopping2,
    text: "Shop with Ease, Comfort, and Confidence",
    description:
      "Browse through a variety of products from the comfort of your home, with a simple and intuitive shopping process designed for hassle-free purchases.",
  },
  {
    src: Shopping3,
    text: "Curated Premium Products for Every Lifestyle",
    description:
      "From everyday essentials to luxurious finds, our platform ensures you get the best items that match your style and elevate your living experience.",
  },
  {
    src: Shopping4,
    text: "Swift, Reliable, and Affordable Deliveries",
    description:
      "Your orders are handled with care and delivered promptly to your doorstep – all without breaking the bank. Quality service, every time.",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next image after a specific time interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  // Move to the previous image
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Move to the next image
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-screen w-full">
      {/* Image and Overlay */}
      <div
        className="relative h-full w-full bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-3 bg-black bg-opacity-50 px-24 md:gap-5">
          {/* Text on Image */}
          <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl">
            {images[currentIndex].text}
          </h2>
          <p className="font-mono text-base text-slate-300 md:text-lg lg:text-xl">
            {images[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute left-5 top-[50%] cursor-pointer rounded-full border p-1 text-5xl text-white"
        onClick={prevSlide}
      >
        <ChevronLeft />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute right-5 top-[50%] cursor-pointer rounded-full border p-1 text-5xl text-white"
        onClick={nextSlide}
      >
        <ChevronRight />
      </div>

      {/* Dashes (for navigation) */}
      <div className="absolute bottom-[3%] left-[50%] mx-auto flex w-fit -translate-x-1/2 justify-center rounded-lg p-2 py-2 text-center">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 h-1 w-12 cursor-pointer rounded-full border border-inputRing ${
              currentIndex === index ? "bg-theme-color" : "bg-green-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
