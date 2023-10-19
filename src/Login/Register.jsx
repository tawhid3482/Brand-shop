import { Link, useNavigate } from "react-router-dom";
import UseHook from "../UseHook/UseHook";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";


const Register = () => {

  const navigate = useNavigate();
  const { loginGoogle, createUserEmail, userUpdate } = UseHook();
  const handleLogin = (media) => {
    media();
    navigate("/");
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (password.length < 6) {
      swal("Sorry", "your password must be 6 charecter", "error");
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal("Sorry", "your password must be one UpperCase letter", "error");
      return;
    } else if (!/(?=.*[@$!%*?&])/.test(password)) {
      swal(
        "Sorry",
        "Your password must contain at least one special character",
        "error"
      );
      return;
    }
    createUserEmail(email,password)
      .then((res) => {
        console.log(res.user);
        userUpdate(name, photo).then(() => {
          swal("Successfully", "Account created successfully", "success");
          navigate("/");
            setTimeout(() => {
                window.location.reload();  
            }, 2*1000);
         
        });
      })
      .catch((error) => {
        console.log(error.message);
        swal("Sorry", "Something wrong", "error");
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col w-full ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCreate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing Up</button>
              </div>
            </form>
            <div className="">
              <p className="flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                You have an account?
                <Link to="/login">
                  <p className="text-red-600 ml-2 font-bold">Sing in</p>
                </Link>
              </p>
            </div>
            <div className="flex justify-center p-5">
              <button onClick={() => handleLogin(loginGoogle)} className="btn">
                <FcGoogle className="text-3xl"></FcGoogle>
                Continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
