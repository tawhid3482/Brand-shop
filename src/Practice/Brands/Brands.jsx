import { Link } from "react-router-dom";
import UseBrands from "../../Hooks/UseBrands";

const Brands = () => {
    const [brand]= UseBrands()
    // console.log(brand)
    return (
        <div className="grid grid-cols-3">
            {
                brand?.map((brands)=><div className="" key={brands.id}>
                    <Link to='product' > 
                       <div className="">
                       <p className="text-xl font-bold my-2">{brands?.brandName}</p> 
                        </div>                   
                    </Link>
                </div>)
            }
        </div>
    );
};

export default Brands;