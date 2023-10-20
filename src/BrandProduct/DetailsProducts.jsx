import swal from "sweetalert";

const DetailsProducts = ({ productsDetails }) =>

{
  const {  photo, name, Description } = productsDetails;

  const handleAddToCart = () => {

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify( productsDetails )
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Successfully", "Your Product has been added to the cart", "success");
        } else {
          swal("Error!", "Something went wrong", "error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        swal("Error!", "Something went wrong", "error");
      });
  };

  return (
    <div>
      <div className="card w-2/5 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{Description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="btn">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProducts;










// const DetailsProducts = ({ productsDetails }) => {
//   console.log(productsDetails);
//   const { photo, name, Description } = productsDetails;
  
//   return (
//     <div>
//       <div className="card w-2/5 mx-auto  bg-base-100 shadow-xl">
//         <figure>
//           <img src={photo} alt="photo" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//           {name}
//           </h2>
//           <p>{Description}</p>
//           <div className="card-actions justify-end">

//             <button className="btn "> Add to cart</button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailsProducts;
