import { Link, useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  //     const bnane = useParams();
  // // console.log(bnane)

  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4 mx-2 ">
        {data.length > 0 ? (
          data?.map((product) => (
            <div
              key={product.id}
              data-aos="flip-up"
              className="border hover:shadow-none shadow-md rounded-md mt-4 ml-0 "
            >
              <div className="hover:underline">
                <Link to={`/product-details/${product?._id}`}>
                  <img
                    className="scale-90 mt-4 transition-all"
                    src={product?.photo}
                    alt={product?.name}
                    title={product?.productName}
                  />
                </Link>
                <Link to={`/product-details/${product?._id}`}>
                  <h2 className="text-center scale-90 text-lg font-semibold">
                    {product?.name}
                  </h2>
                </Link>
              </div>
              <h2 className="text-center mt-3 text-secondary">
                BDT {product?.price}
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-4 mb-5 mt-2 justify-center">
                <Link to={`/product-details/${product?._id}`}>
                  {" "}
                  <button className="border hover:shadow capitalize rounded-md md:px-3 btn-sm md:btn-sm bg-violet-600 hover:bg-violet-800 text-white">
                    Details
                  </button>
                </Link>
                <Link to={`/update-product/${product?._id}`}>
                  <button className=" border hover:shadow capitalize rounded-md md:px-3 btn-sm md:btn-sm ">
                    Update{" "}
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-bold ">Not Available Product</p>
        )}
      </div>
    </div>
  );
};

export default Products;
