import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const PcProducts = () => {
  const bandProducts = useLoaderData();

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 py-20">
          {bandProducts.length === 0 ? (
            <>
              <h1 className="text-4xl font-bold text-center text-red-500 flex justify-center">
                There are no products in this brand
              </h1>
            </>
          ) : (
            bandProducts?.map((product) => (
              <ProductsCard product={product} key={product.id}></ProductsCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PcProducts;
