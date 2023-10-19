

import { Link } from "react-router-dom";
import BrandProduct from "../BrandProduct/BrandProduct";

const BrandShow = ({ data }) => {
  const {id, img, brandName } = data;
  // const [selectedBrand, setSelectedBrand] = useState(null);

  const handleClick = (brandName, event) => {
    event.preventDefault();
    // setSelectedBrand(brandName);
  };

  return (
    <div>
      <Link to={`/brandsProduct/${id}`}>
        <div
          onClick={() => handleClick(brandName)}
          className="flex justify-center gap-3 items-center rounded-3xl border-2 hover:bg-slate-300 h-24"
        >
          <img src={img} className="w-32 h-16" alt="" />
          <p className="text-xl font-medium">{brandName}</p>
        </div>
      </Link>
    </div>
  );
};

export default BrandShow;












// import  { useState } from "react";
// import { Link } from "react-router-dom";
// import BrandProduct from "../BrandProduct/BrandProduct";

// const BrandShow = ({ data }) => {
//   const { img, brandName } = data;
//   const [selectedBrand, setSelectedBrand] = useState(brandName);

//   const handleClick = () => {
//     setSelectedBrand(brandName);
//   };

//   return (
//     <div>
//       <Link to={`/brandsProduct/${selectedBrand}`}>
//         <div
//           onClick={handleClick}
//           className="flex justify-center gap-3 items-center rounded-3xl border-2 hover:bg-slate-300 h-24"
//         >
//           <img src={img} className="w-32 h-16" alt="" />
//           <p className="text-xl font-medium">{brandName}</p>
//         </div>
//         <div className="">
//           {
//             selectedBrand ? <BrandProduct setSelectedBrand={selectedBrand}></BrandProduct> : <div className="">
//               loading
//             </div>
//           }
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default BrandShow;




// import  { useState } from "react";
// import { Link } from "react-router-dom";
// import BrandProduct from "../BrandProduct/BrandProduct";

// const BrandShow = ({ data }) => {
//   const [selectedBrand, setSelectedBrand]= useState()

//   const {img, brandName}= data
//   console.log(selectedBrand)

//   const handleClick = ()=>{
//       setSelectedBrand(brandName)
//   }

//   return (
//     <div>

//       <Link to={`/brandsProduct/${brandName}`}>
//         <div
//           onClick={() => handleClick(brandName)}
//           className="flex justify-center gap-3 items-center rounded-3xl border-2 hover:bg-slate-300 h-24"
//         >
//           <img src={img} className="w-32 h-16" alt="" />
//           <p className="text-xl font-medium">{brandName}</p>
//         </div>
//         <div className="">
//           {
//             <BrandProduct></BrandProduct>
//           }
//         </div>
//       </Link>

      
//     </div>
//   );
// };

// export default BrandShow;



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
