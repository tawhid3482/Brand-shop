
const AboutDetails = () => {
  return (
    <div>
      <div className="m-3">
        <p className="text-3xl text-center font-bold mb-5">About Us</p>

        <div
          className="hero h-96"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2016/11/22/09/03/banner-1848731_960_720.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
             
             
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <p className="text-2xl text-center font-bold text-purple-500"> Who We Are:</p>
        <p className="text-lg text-center">Our Technology and Electronics team comprises brilliant engineers, designers, and visionaries who share a common goal - to revolutionize the way we interact with the world. With diverse expertise ranging from hardware engineering to software development, we are a dynamic and collaborative group, driven by the relentless pursuit of excellence.</p>
      </div>

      <div className="w-10/12 mx-auto">
        <p className="text-2xl text-center font-bold text-purple-500"> Our Mission:</p>
        <p className="text-lg text-center">Our mission is simple yet profound: to harness the power of technology and electronics to solve complex problems and enhance the human experience. Whether it's developing sustainable energy solutions, designing intelligent devices, or creating innovative software applications, we strive to push the boundaries of what is possible.</p>
      </div>
    </div>
  );
};

export default AboutDetails;
