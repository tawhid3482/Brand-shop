import { Link } from "react-router-dom";

const BrandShow = ({ item }) => {

  const { id, img, brandName } = item;

  // const [selectedBrand, setSelectedBrand] = useState(null);

  // const handleClick = () => {
  //   setSelectedBrand(item); // Store the entire brand object in the state
  // };

  return (
    <div>
      <Link to={`/brandsProduct/${id}`}>
        <div
         
          className="flex justify-center gap-3 items-center rounded-3xl border-2 hover:bg-slate-300 h-24"
        >
          <img src={img} className="w-32 h-16" alt="" />
          <p className="text-xl font-medium">{brandName}</p>
        </div>
      </Link>
      {/* <div className="">
        {selectedBrand && <BrandProduct selected={selectedBrand} item={item} />}
      </div> */}
    </div>
  );
};

export default BrandShow;








// import  { useState } from "react";
// import { Link } from "react-router-dom";
// import BrandProduct from "../BrandProduct/BrandProduct";

// const BrandShow = ({ item }) => {
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
