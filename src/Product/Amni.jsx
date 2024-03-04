import FetchHook from "../FetchHook/FetchHook";
import ProductsFilter from "./productsFilter";

const Amni = () => {
    const [products] = FetchHook()
    // console.log(products)
    return (
        <div>
            {
                products?.map((prod)=><ProductsFilter key={prod.id} prod={prod}></ProductsFilter>)
            }
        </div>
    );
};

export default Amni;