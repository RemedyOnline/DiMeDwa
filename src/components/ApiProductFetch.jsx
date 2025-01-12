import { Grid, List, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { apiGetProducts } from "../services/products";

const ApiProductFetch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [apiProducts, setApiProducts] = useState([]);
  const [gridView, setGridView] = useState(true);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(false);

    const request = await apiGetProducts({
      productName: { $regex: searchValue },
    });

    const response = await request.data;
    setApiProducts(response);
    console.log("API Response: ", response);
  };

  useEffect(() => {
    getProducts();
  }, [searchValue]);

  if (loading)
    return (
      <div className="mx-auto my-auto flex h-screen w-screen items-center justify-center">
        Loading...
      </div>
    );

  return (
    <section className="mx-auto my-2 max-w-7xl px-3 sm:px-5 md:px-10">
      <div
        className={`sticky top-2 z-20 mx-auto flex h-fit w-[110px] items-center rounded-full bg-theme-color px-1 py-1.5 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] transition-all duration-300 sm:w-[270px] sm:px-2 sm:py-1.5 md:w-[350px] md:p-2 lg:w-[500px]`}
      >
        <input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for any item... from Groceries, to Appliances, to Furniture..."
          className="w-full bg-transparent px-1 text-xs font-normal text-white outline-none placeholder:text-sm sm:text-sm md:px-2 lg:text-base"
        />
        <Search size={20} />
      </div>
      <div>
        <h2>All Products</h2>
        <div>
          <Grid />
          <List />
        </div>
      </div>
      <div>{/* div for the mapping... */}</div>
    </section>
  );
};

export default ApiProductFetch;
