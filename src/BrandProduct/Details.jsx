import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsProducts from "./DetailsProducts";

const Details = () => {
  const [productsDetails, setProductsDetails] = useState(null);
  const product = useLoaderData();
  const { _id } = useParams();
  console.log(_id)

  useEffect(() => {
    if (product && _id) {
      const findProduct = product.find((prod) => prod._id == _id);
      setProductsDetails(findProduct);
      console.log(findProduct);
    }
  }, [_id, product]);

  return (
    <div>
      <div className="">
        {productsDetails ? (
          <DetailsProducts productsDetails={productsDetails} />
        ) : (
          <div className="text-center text-4xl">
            <span className="loading loading-spinner bg-blue-700 loading-lg">
              Saikat
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
