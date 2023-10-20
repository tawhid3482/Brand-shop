import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
  const products = useLoaderData();
  const navigate = useNavigate()
  console.log(products);
  const { _id, name, type, price, rating, brand, Description, photo } =
    products;
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const brand = form.brand.value;
    const Description = form.Description.value;
    const photo = form.photo.value;
    const updateProduct = {
      name,
      type,
      price,
      rating,
      brand,
      Description,
      photo,
    };

    console.log(updateProduct);

    fetch(`https://assingment-10-server-site-6z7rmnwc8-saikats-projects.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          swal("Successfully", "Your Product Updated", "success");
          form.reset();
          navigate('/AddCart')
        } else {
          swal("error!", "Something wrong", "error");
        }
      });
  };
  return (
    <div className="md:w-3/4 mx-auto">
      <div className="bg-gray-300 p-5 ">
        <h2 className="text-5xl font-extrabold text-center mb-3">
          Update Your Product
        </h2>
        <p className="text-lg text-center mb-3">
         Your current products name: <span className="text-red-500">{name}</span>
        </p>
        <form onSubmit={handleAdd}>
          <div className="md:flex gap-3 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="Product Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-3 mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-3 mb-8 ">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Description"
                  defaultValue={Description}
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  defaultValue={brand}
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="gap-3 mb-8 ">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Product"
            className="btn btn-block bg-gray-300"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
