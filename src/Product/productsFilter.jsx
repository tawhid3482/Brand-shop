import { useEffect, useState } from "react";
import UseProducts from "../Hooks/UseProducts";
import { useParams } from "react-router-dom";
import Products from "./Products";

const ProductsFilter = () => {
  const [pro] = UseProducts();
  const [products, setProduct] = useState(null);
  const { brandName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
    //   const data = await UseProducts();
      const filterProducts = pro?.filter((item) => item.brand === brandName);
      setProduct(filterProducts);
    };

    fetchProducts();
  }, [brandName,pro]);

  return (
    <div>
      {products ? (
        <Products products={products}></Products>
      ) : (
        <div className="text-center">
          <progress className="progress w-56"></progress>
        </div>
      )}
    </div>
  );
};

export default ProductsFilter;
