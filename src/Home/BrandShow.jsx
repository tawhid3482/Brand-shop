import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrandProduct from "../BrandProduct/BrandProduct";

const BrandShow = ({ data }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const { img, brandName } = data;

  const handleClick = (brandName) => {
    if (brandName) {
      setSelectedBrand(brandName);
    }
  };

  return (
    <div>
      <Link to={`/brandsProduct/${brandName}`}>
        <div
          onClick={() => handleClick(brandName)}
          className="flex justify-center gap-3 items-center rounded-3xl border-2 hover:bg-slate-300 h-24"
        >
          <img src={img} className="w-32 h-16" alt="" />
          <p className="text-xl font-medium">{brandName}</p>
        </div>
      </Link>
      <div className="">
        {selectedBrand && <BrandProduct brandName={selectedBrand} />}
      </div>
    </div>
  );
};

export default BrandShow;



// import { Link } from "react-router-dom";
// import BrandProduct from "../BrandProduct/BrandProduct";

// const BrandShow = ({ data }) => {
//   const { img, brandName } = data;
//   console.log(brandName)

//   const handleClick = (brandName, event) => {
//     event.preventDefault();
//     console.log(brandName);
//   };

//   return (
//     <div>
//       <Link to={`/brandsProduct/${brandName}`}>
//         <div
//           onClick={(event) => handleClick(brandName, event)}
//           className="flex justify-center gap-3 items-center rounded-3xl border-2 hover:bg-slate-300 h-24"
//         >
//           <img src={img} className="w-32 h-16" alt="" />
//           <p className="text-xl font-medium">{brandName}</p>
//         </div>
//       <div className="">
//         {brandName && <BrandProduct nameBrand={brandName} />}
//       </div>
//       </Link>
//     </div>
//   );
// };

// export default BrandShow;
