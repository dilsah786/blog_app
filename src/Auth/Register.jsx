import React from "react";

const Register = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="w-1/2 ">
          <h2 className="font-bold text-2xl">Register</h2>
          <p className="text-sm mt-4  ">If you already a user, Please login</p>
          <form className="flex flex-col px-16  gap-4  ">
            <input
              className="p-2 mt-8 rounded-xl border "
              type="text"
              name="Name"
              placeholder="name"
            />
            <input
              className="p-2      rounded-xl border"
              type="text"
              name="Email"
              placeholder="email"
            />
            <div className="">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="Password"
                placeholder="Password"
              />
            </div>

            <button className="bg-cyan-400 p-2  rounded-xl border text-white">
              Register
            </button>
          </form>
          <div className="mt-10 grid grid-cols-3 items-center text-gray">
            <hr />
            <p className="text-center">OR</p>
            <hr />
          </div>
          <button className="py-2 bg-white w-full rounded-xl mt-5" >
            Login with Google
          </button>
        </div>
        <div className="w-1/2 sm:block hidden  ">
          <img
            className=""
            src="https://img.lovepik.com/element/45007/0204.png_860.png"
            width={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
