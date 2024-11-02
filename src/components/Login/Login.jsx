import loginImage from "./../../assets/login.png";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row w-full p-5 gap-5 sm:gap-8 xl:gap-16 items-center justify-center">
        <div className="w-1/2 mb-5 sm:mb-0 flex items-center justify-end">
          <img
            src={loginImage}
            alt="login Image"
            className="w-72 sm:h-64 lg:w-96 lg:h-80"
          />
        </div>

        <div className="sm:w-1/2 w-full ">
          <div className="w-96 sm:w-auto lg:w-4/5 xl:w-3/5 bg-base-100 shadow-2xl rounded-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  className="input input-bordered"
                  required
                />
                <label className="text-right">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white font-semibold text-lg">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
