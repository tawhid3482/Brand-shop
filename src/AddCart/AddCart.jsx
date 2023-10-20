import { useLoaderData } from "react-router-dom";
import YourProduct from "./YourProducts/YourProduct";

const AddCart = () => {
    const products = useLoaderData();
    

    return (
        <div>
            <h3 className="text-center text-4xl font-bold mb-5">Your Products Cart</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-5">
                {
                    products.map((product)=><YourProduct key={product._id} product={product}></YourProduct>)
                }
            </div>
        </div>
    );
};

export default AddCart;