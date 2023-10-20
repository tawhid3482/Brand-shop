import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
 import { AiFillDelete } from 'react-icons/ai';
 import { BiEditAlt } from 'react-icons/bi';
 import { FcViewDetails } from 'react-icons/fc';
// import { useState } from "react";


const YourProduct = ({ product }) => {
  const { _id, name, type, price, rating, brand, photo } = product;

  // const [users,setUsers]= useState(product)

  const navigate = useNavigate()

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {

      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${id}`, {
          method:"DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged && data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              navigate('/addCart');
            } else {
              Swal.fire("Error!", "Failed to delete the item.", "error");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire("Error!", "Something went wrong", "error");
          });
      }
    });
  };
  
  return (
    <div>
      <div className="card card-side w-full mg:w-[450px] lg:w-[600px] bg-gray-600 text-white shadow-xl">
        <figure>
          <img src={photo} className="h-60 md:w-[400px] " alt="Movie" />
        </figure>
        <div className="flex justify-around w-full p-2 items-center h-60 ">
          <div className="space-y-2">
            <h2 className="card-title">{name}</h2>
            <p>{type}</p>
            <p>{brand}</p>
            <p>$ {price}</p>
            <Rating
              initialRating={rating}
              emptySymbol={<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>}
              fullSymbol={<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>}
              readonly
            />
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-3">
              <button onClick={() => handleDelete(_id)} className="">
             <AiFillDelete className="text-3xl"></AiFillDelete>
              </button>
              <Link to={`/update/${_id}`}>
                <button className=""><BiEditAlt className="text-3xl"></BiEditAlt></button>
              </Link>
              <Link to={`/details/${_id}`}>
                <button className=" "><FcViewDetails className="text-3xl"></FcViewDetails></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourProduct;
