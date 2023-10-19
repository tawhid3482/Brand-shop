
import CustomFetch from "../CustomFetch/CustomFetch";
import BrandShow from "./BrandShow";
const Brands = () => {
  const [service] = CustomFetch()
  return (
    <div className="m-5">
      <h2 className="text-center font-bold text-4xl mb-5">Our Brands</h2>

      <div className="grid grid-cols-3 gap-5">
        {
          service?.map((data)=><BrandShow key={data.id} data={data}></BrandShow>)
        }
      </div>
    </div>
  );
};

export default Brands;
