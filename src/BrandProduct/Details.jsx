import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsProducts from "./DetailsProducts";

const Details = () => {
  const [productsDetails,setProductsDetails]=useState(null)
  const product = useLoaderData();
  const {_id}= useParams()

  useEffect(()=>{
    const findProduct = product?.find(product=>product?._id == _id)
    setProductsDetails(findProduct)
    console.log(findProduct)
  },[_id,product])

console.log(_id)
  return (
    <div>
      <div className="">
        {
          productsDetails ? <DetailsProducts productsDetails={productsDetails}></DetailsProducts> :
          <div className="text-center text-4xl">
          <span className="loading loading-spinner bg-blue-700 loading-lg "></span>

        </div>
        }
      </div>
      
    </div>
  );
};

export default Details;
