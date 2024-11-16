import { useLocation } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import UseProducts from "../../Hooks/UseProducts";

const PcProducts = () => {
  const [pro] = UseProducts(); // All products
  const location = useLocation();

  // Extract query parameter from the URL
  const queryParams = new URLSearchParams(location.search);
  const selectedBrand = queryParams.get("brand");

  // Filter products by brand
  const bandProducts = pro.filter(
    (product) => product.brand.toLowerCase() === selectedBrand?.toLowerCase()
  );

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 py-20">
          {bandProducts.length === 0 ? (
            <h1 className="text-4xl font-bold text-center text-red-500 flex items-center justify-center">
              There are no products in this brand
            </h1>
          ) : (
            bandProducts?.map((product) => (
              <ProductsCard product={product} key={product._id}></ProductsCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PcProducts;
