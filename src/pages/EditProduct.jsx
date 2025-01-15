import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiEditProduct, apiGetOneProduct } from "../services/products";
import { Eye, EyeClosed } from "lucide-react";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [initialLoad, setinitialLoad] = useState(true);

  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    // discountPrice: "",
    discountPercentage: "",
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await apiGetOneProduct(id);
        const product = response.data;

        setFormData({
          productName: product.productName || "",
          description: product.description || "",
          price: product.price || "",
          discountPercentage: product.discountPercentage || "",
          // discountPrice: product.discountPrice || "",
        });
        setinitialLoad(false);
      } catch (error) {
        setError("Error loading product. Please try againg later...");
        console.log("Error fetching product", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const productData = new FormData();
      Object.keys(formData).forEach((key) =>
        productData.append(key, formData[key]),
      );

      if (images.length > 0) {
        images.forEach((image) => productData.append("images", image));
        await apiEditProduct(id, productData); // use formData if images are included...
      } else {
        await apiEditProduct(id, formData); // send JSON if no images...
      }

      setMessage("Product updated successfully!");
      setTimeout(() => {
        navigate(`/products/${id}`);
      }, 2000);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Error updating product. Please try again...",
      );
      console.log("Error details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (initialLoad) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="animate-bounce text-xl text-gray-600">
          Loading product data...
        </p>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="my-5 w-full max-w-md space-y-5 bg-highlight p-4 shadow-md md:p-6"
      >
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-bold">Edit Product</h2>
          <p className="text-sm md:text-base">Update your product details</p>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="productName" className="text-sm font-medium">
              Product Name *
            </label>
            <input
              required
              type="text"
              name="productName"
              id="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
            />
          </div>
          <div className="flex gap-5">
            <div className="relative flex flex-col gap-1">
              <label htmlFor="price" className="text-sm font-medium">
                Price *
              </label>
              <input
                required
                type="number"
                name="price"
                aria-label="price"
                id="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
              />
            </div>
            {/* <div className="relative flex flex-col gap-1">
              <label htmlFor="discountPrice" className="text-sm font-medium">
                Discount Price *
              </label>
              <input
                required
                type="number"
                name="discountPrice"
                aria-label="discountPrice"
                id="discountPrice"
                value={formData.discountPrice}
                onChange={handleInputChange}
                className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
              />
            </div> */}
            <div className="relative flex flex-col gap-1">
              <label
                htmlFor="discountPercentage"
                className="text-sm font-medium"
              >
                Discount Percentage *
              </label>
              <input
                required
                type="number"
                name="discountPercentage"
                aria-label="discountPercentage"
                id="discountPercentage"
                value={formData.discountPercentage}
                onChange={handleInputChange}
                className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              required
              type="description"
              name="description"
              id="description"
              rows="3"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="avatar" className="text-sm font-medium">
              Upload Images *
            </label>
            <div className="flex justify-center rounded-md border-2 border-dashed border-inputRing bg-inputBG px-4 py-3">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-8 w-8 opacity-80"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm">
                  <label
                    htmlFor="imageInput"
                    className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500"
                  >
                    <span className="underline">Upload Images</span>
                    <input
                      id="imageInput"
                      name="images"
                      type="file"
                      onChange={handleImageChange}
                      value={formData.images}
                      className="sr-only"
                      multiple
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-400">
                  PNG, JPG, JPEG.. up to 5MB
                </p>
              </div>
            </div>
          </div>
        </div>
        {message && (
          <div className="flex items-center justify-center rounded-md border border-green-200 bg-green-50 p-2">
            <p className="text-sm text-green-600">{message}</p>
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center rounded-md border border-red-200 bg-red-50 p-2">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
        <div className="">
          <button
            type="submit"
            disabled={loading}
            className={`${loading ? "bg-gray-400" : "bg-theme-color hover:bg-hoverBG"} w-full rounded-lg px-2 py-2.5 text-white ring ring-inputRing transition-colors`}
          >
            {loading ? "Loading..." : "Update Product"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProduct;
