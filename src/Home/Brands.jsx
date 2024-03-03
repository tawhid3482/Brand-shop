import { Link } from "react-router-dom";
import CustomFetch from "../CustomFetch/CustomFetch";
const Brands = () => {
  const [service] = CustomFetch();

  return (
    <div className="m-5">
      <h2 className="text-center font-bold text-4xl mb-5">Our Brands</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {service?.map((brands) => (
          <div key={brands.id} className="flex justify-center items-center gap-5 border border-gray-400 rounded-xl p-2">

              <Link to={`/products/${brands.brandName}`}> 
              <img src={brands.img} className="w-32 h-24 " alt="" />
              </Link>

              <Link to={`/products/${brands.brandName}`}> 
            <p className="text-xl font-semibold">{brands.brandName}</p>
              </Link>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
