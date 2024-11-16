import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { _id, photo, name, rating, price, brand, type } = product;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border-emerald-500 border ">
        <figure>
          <img className="h-52 lg:w-72" src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="lg:card-title">{name}</h2>
          <p className="lg:text-lg font-bold">Brand: {brand}</p>
          <p className="lg:text-lg font-bold">Price ${price}</p>
          <p className="lg:text-lg font-bold">Type: {type}</p>
          <p className="lg:text-lg font-bold">Rating: {rating}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/details/${_id}`}
              className="btn bg-emerald-500 text-white font-bold"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
