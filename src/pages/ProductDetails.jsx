import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiGetOneProduct, apiDeleteProduct } from "../services/products";
import {
  Calendar,
  DollarSign,
  Mail,
  Pencil,
  Phone,
  Store,
  Tag,
  User,
} from "lucide-react";
import MainNavbar from "../components/MainNavbar";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const productID = params.id;

  const HandleFetchProduct = async () => {
    try {
      setLoading(true);
      const response = await apiGetOneProduct(productID);

      if (!response || !response.data) {
        throw new Error("No product data received");
      }

      setProduct(response.data);
      console.log("Fetched product:", response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
      // More specific error message
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(
          `Error: ${error.response.status} - ${error.response.data.message || "Failed to fetch product"}`,
        );
      } else if (error.request) {
        // The request was made but no response was received
        alert(
          "No response received from server. Please check your connection.",
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        alert(
          error.message || "Failed to fetch product. Please try again later.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (confirmDelete) {
      try {
        setIsDeleting(true);
        const response = await apiDeleteProduct(productID);

        if (response.status === 200) {
          alert("Product deleted successfully!");
          navigate("/");
        }
      } catch (error) {
        console.error("Error deleting product:", error);

        // More user-friendly error messages
        if (error.response?.status === 404) {
          alert("This product no longer exists or has already been deleted");
        } else if (error.response?.status === 403) {
          alert("You don't have permission to delete this product");
        } else {
          alert(error.message || "Failed to delete product. Please try again.");
        }
      } finally {
        setIsDeleting(false);
      }
    }
  };

  useEffect(() => {
    console.log("Product ID:", productID);
    console.log("Auth Token:", localStorage.getItem("token"));
    HandleFetchProduct();
  }, [productID]);

  if (loading || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="animate-bounce font-mono text-2xl">
          {loading ? "Loading..." : "No Product Found"}
        </h2>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="mx-auto max-w-7xl text-wrap px-4">
      <MainNavbar />
      {/* Product Image and Details */}
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-5">
        <img
          src={`https://savefiles.org/${product.images}?shareable_link=440`}
          alt={product.productName || "Product Image"}
          className="col-span-2 h-96 w-96 rounded-lg"
        />
        <div className="col-span-3 w-full space-y-4">
          <h2 className="text-3xl font-bold">
            {product.productName || "Product Name"}
          </h2>
          <div className="flex items-center space-x-2">
            <Tag className="h-5 w-5" />
            <span className="flex items-center text-xl font-semibold">
              <DollarSign className="mr-1 h-4 w-4" />
              {product.price || "Product Price"}
            </span>
            {product.discountPercentage > 0 && (
              <>
                {/* <span className="flex items-center rounded bg-green-100 px-2 py-1 text-green-800">
                  {product.discountPercentage || "percentageValue"}% OFF
                  {product.discountPercentage
                    ? parseFloat(product.discountPercentage).toFixed(2)
                    : "percentageValue"}
                  % OFF
                </span> */}
                <span className="flex items-center rounded bg-green-100 px-2 py-1 text-green-800">
                  {product.discountPercentage
                    ? new Intl.NumberFormat("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      }).format(product.discountPercentage)
                    : "percentageValue"}
                  % OFF
                </span>
              </>
            )}
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-2 font-semibold">Description</h2>
            <p className="text-gray-700">
              {product.description || "description"}
            </p>
          </div>
          <div className="flex gap-5">
            <div className="w-2/3 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-2 font-semibold">Category</h2>
              <p className="text-gray-700">
                {product.category
                  ? product.category.charAt(0).toUpperCase() +
                    product.category.slice(1)
                  : "DefualtCategory"}
              </p>
            </div>
            <div className="flex w-1/3 flex-col gap-5">
              <button
                onClick={() =>
                  navigate(`/dashboard/inventory/edit/${productID}`)
                } // Redirect to edit page
                className="flex items-center justify-center gap-2 rounded-lg bg-theme-color py-2 text-white hover:bg-hoverBG"
              >
                <span>Edit</span>
                <span>
                  <Pencil size={16} />
                </span>
              </button>
              <button
                onClick={handleDeleteProduct}
                disabled={isDeleting}
                className={`rounded-lg py-2 text-white ${
                  isDeleting
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-red-700 hover:bg-red-500"
                }`}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Seller Information */}
      {product.user && (
        <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold">Seller Information</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              {/* <img
                src={product.user?.avatar || "/api/placeholder/64/64"}
                alt={product.user?.userName || "User"}
                className="h-16 w-16 rounded-full"
              /> */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <User />
              </div>
              <div>
                <h3 className="font-semibold">{product.user?.userName}</h3>
                <div className="flex items-center text-gray-600">
                  <Store className="mr-1 h-4 w-4" />
                  {product.user?.businessName}
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{product.user?.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>{product.user?.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>
                  Member since{" "}
                  {product.user?.createdAt &&
                    formatDate(product.user.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Product Timeline */}
      <div className="mt-5 flex justify-between">
        <span className="text-xs md:text-sm">
          Listed on {formatDate(product.createdAt)}
        </span>
        <span className="text-xs md:text-sm">
          Last updated {formatDate(product.updatedAt)}
        </span>
      </div>
    </section>
  );
};

export default ProductDetails;
