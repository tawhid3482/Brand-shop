import { Link } from "react-router-dom";
import UseBrands from "../../Hooks/UseBrands";

const Brands = () => {
    const [brand]= UseBrands()
    // console.log(brand)
    return (
        <div className="grid lg:grid-cols-3 gap-10 mt-20">
            {
             
                brand.map(band => <div key={band.id} className="mx-10">  <Link to={`/bands/${band.brandName}`}>
                <div className="card card-side shadow-2xl border border-emerald-500  text-emerald-500">
                  <figure className="">
                    <img className="lg:w-60 h-40" src={band.img} alt="Band" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{band.brandName}</h2>
                  </div>
                </div>
              </Link></div>)
            }
           </div>
    );
};

export default Brands;