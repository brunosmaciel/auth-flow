import { BsGithub, BsGoogle, BsTwitter } from 'react-icons/bs';

import { signIn } from 'next-auth/react';

const LoginComponent = () => {
  return (
    <div className="relative flex flex-col justify-center h-[35rem] overflow-hidden">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <div className="flex justify-between">
                  <button className="btn btn-square bg-transparent border-none hover:bg-base-200">
                    <BsGithub size={30} onClick={() => signIn('github')} />
                  </button>
                  <button className="btn btn-square bg-transparent border-none hover:bg-base-200">
                    <BsGoogle size={30} onClick={() => signIn('google')} />
                  </button>
                  <button className="btn btn-square bg-transparent border-none hover:bg-base-200">
                    <BsTwitter size={30} onClick={() => signIn('twitter')} />
                  </button>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
