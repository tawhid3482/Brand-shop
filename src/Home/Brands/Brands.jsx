import { Link, useNavigate } from "react-router-dom";
import UseBrands from "../../Hooks/UseBrands";

const Brands = () => {
  const [brand] = UseBrands();
  const navigate = useNavigate();

  const handleBrandClick = (brandName) => {
    navigate(`/bands?brand=${brandName}`);
  };

  return (
    <div className="">
      <h2 className="text-center font-bold text-4xl my-8">Our Brands</h2>
      <div className="grid lg:grid-cols-3 gap-10 ">
        {brand.map((band) => (
          <div key={band.id} className="mx-10">
            <button
              onClick={() => handleBrandClick(band?.brandName)}
              className=""
            >
              <div className="card card-side shadow-2xl border border-emerald-500  text-emerald-500">
                <figure className="">
                  <img className="lg:w-60 h-40" src={band.img} alt="Band" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{band.brandName}</h2>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
