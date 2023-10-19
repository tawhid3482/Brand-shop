const DetailsProducts = ({ productsDetails }) => {
  console.log(productsDetails);
  const { photo, name, Description } = productsDetails;
  return (
    <div>
      <div className="card w-2/5 mx-auto  bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {name}
          </h2>
          <p>{Description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProducts;
