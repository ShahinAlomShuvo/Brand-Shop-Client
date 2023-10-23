import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import banner1 from "../../assets/Images/slider1.jpg";
import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {
  const sectionStyle = {
    backgroundImage: `url(${banner1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { createUSer, googleLogIn, githubLogin, updateUserProfile } =
    useContext(AuthContext);

  const registrationHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      return toast.error("Password must be 6 Character");
    }

    if (!/^(?=.*[A-Z])(?=.*[^A-Za-z0-9])/.test(password)) {
      return toast.error("Password must have 1 Capital & 1 special Character");
    }

    // registration with email & password

    createUSer(email, password)
      .then((res) => {
        navigate("/");
        updateUserProfile(name, photoUrl);
        toast.success("Registration Successful");
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  // registration with google
  const googleLogInHandler = () => {
    googleLogIn()
      .then((res) => {
        navigate("/");
        toast.success("Registration Successful");
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  // registration with google
  const githubLoginHandler = () => {
    githubLogin()
      .then((res) => {
        navigate("/");
        toast.success("Registration Successful");
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  return (
    <div>
      <section className='absolute w-full h-full' style={sectionStyle}>
        <div className='absolute top-0 w-full h-full bg-gray-900 bg-opacity-70'>
          <div className='container mx-auto px-4 h-full'>
            <div className='flex content-center items-center justify-center h-full'>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-transparent border-0'>
                  <div className='rounded-t mb-0 px-6 py-6'>
                    <div className='text-center mb-3'>
                      <h6 className='text-gray-400 text-lg font-bold'>
                        Sign up with
                      </h6>
                    </div>
                    <div className='btn-wrapper text-center'>
                      <button
                        onClick={githubLoginHandler}
                        className='bg-white active-bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
                        type='button'
                        style={{ transition: "all .15s ease" }}
                      >
                        <FaGithub /> Github
                      </button>
                      <button
                        onClick={googleLogInHandler}
                        className='bg-white active-bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
                        type='button'
                        style={{ transition: "all .15s ease" }}
                      >
                        <FaGoogle /> Google
                      </button>
                    </div>
                    <hr className='mt-6 border-b-1 border-gray-400' />
                  </div>
                  <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                    <div className='text-gray-300 text-lg text-center mb-3 font-bold'>
                      <small>Or sign up with credentials</small>
                    </div>
                    <form onSubmit={registrationHandler}>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='name'
                        >
                          Name
                        </label>
                        <input
                          required
                          name='name'
                          type='text'
                          className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          placeholder='Name'
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='photoUrl'
                        >
                          Photo URL
                        </label>
                        <input
                          required
                          name='photoUrl'
                          type='text'
                          className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          placeholder='Photo URL'
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='email'
                        >
                          Email
                        </label>
                        <input
                          required
                          name='email'
                          type='email'
                          className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          placeholder='Email'
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='password'
                        >
                          Password
                        </label>
                        <div className='relative'>
                          <input
                            required
                            name='password'
                            type={showPassword ? "text" : "password"}
                            className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                            placeholder='Password'
                            style={{ transition: "all .15s ease" }}
                          />
                          <span
                            className='absolute right-3 top-3 cursor-pointer'
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className='inline-flex items-center cursor-pointer'>
                          <input
                            required
                            id='customCheckLogin'
                            type='checkbox'
                            className='form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5'
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className='ml-2 text-sm font-semibold text-gray-300'>
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className='text-center mt-6'>
                        <button
                          className='bg-gray-900 text-white active-bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                          type='submit'
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='flex flex-wrap mt-6 px-12'>
                  <div className='w-full '>
                    <Link to={"/login"} className='text-gray-300'>
                      <small>Already have an account? Sign In</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
