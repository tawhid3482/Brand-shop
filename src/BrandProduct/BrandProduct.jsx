import ProductsShow from "./ProductsShow/ProductsShow";
import FetchHook from "../FetchHook/FetchHook";
import { useLoaderData, useParams } from "react-router-dom";

const BrandProduct = () => {
  const [products] = FetchHook();
  console.log(products)
  const data = useLoaderData();
  const { id } = useParams();
  const silderdata = data.find((brand) => brand.id == id);
  const { img1, img2, img3 } = silderdata;

  const selectedBrand = {};
  console.log(selectedBrand);

  const filteredProducts = products
    ? products.filter((product) => product?.brand === selectedBrand)
    : [];

  return (
    <div>
      {/* Carousel */}
      <div className="carousel w-full h-96">
        <div id="item1" className="carousel-item w-full">
          <img src={img1} className="w-full" alt="Electrical Appliances" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img2} className="w-full" alt="Black Friday Sale" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full" alt="Sale Banner" />
        </div>
      </div>

      {/* Navigation buttons for carousel */}
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>

      {/* Display filtered products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5">
        {filteredProducts?.map((product) => (
          <ProductsShow key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
