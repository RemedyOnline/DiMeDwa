import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  apiGetOneProduct,
  apiDeleteProduct,
  apiEditProduct,
} from "../services/products";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const productID = params.id;

  const HandleFetchProduct = async () => {
    try {
      setLoading(true);
      const request = await apiGetOneProduct(productID);
      const response = await request.data;
      setProduct(response);
      console.log(response);
    } catch (error) {
      console.log("Error fetching product", error);
      alert("Failed to fetch product bro... please try again later...");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product..??",
    );
    if (confirmDelete) {
      try {
        const deleteRequest = await apiDeleteProduct(productID);
        console.log("Product deleted: ", deleteRequest);
        alert("Product deleted successfully...");
        navigate("/");
      } catch (error) {
        if (error.response && error.response.status === 403) {
          alert("You do not have permission to delete this product bro...");
        } else {
          console.log("Error deleting product: ", error);
          alert("Failed to delete product...");
        }
      }
    }
  };

  useEffect(() => {
    HandleFetchProduct();
  }, [productID]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="font-mono text-2xl">Loading...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="font-mono text-2xl">No Product Found bro!</h2>
      </div>
    );
  }

  return (
    <section>
      <h2>PRODUCT DETAILS</h2>
    </section>
  );
};

export default ProductDetails;
