import { useEffect, useState } from "react";
import UseProducts from "../Hooks/UseProducts";
import {  useParams } from "react-router-dom";
import Products from "./Products";

const ProductsFilter = ({prod}) => {

  const [pro] = UseProducts();
  // console.log(pro)
  const [products, setProduct] = useState(null);
  // const { brandName } = useParams();
  // const data = useLoaderData();
  // console.log(data.id)
// const {id}= useParams()
    // console.log(prod.brandName)
    const {brandName}=prod

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
