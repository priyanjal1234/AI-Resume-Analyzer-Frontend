import { Lock, Mail } from "lucide-react";
import React, { useContext, useState } from "react";
import userService from "../services/User";
import { toast } from "react-toastify";
import { UserDataContext } from "../context/UserContext";

const Sigin = ({ setshowSignin }) => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);

  let { setuser, setisLoggedin } = useContext(UserDataContext);

  function handleLoginChange(e) {
    let { name, value } = e.target;
    setlogin((prev) => ({ ...prev, [name]: value }));
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();

    setloading(true);

    try {
      let loginUserRes = await userService.loginUser(
        login.email,
        login.password
      );
      const userObj = {
        name: loginUserRes?.displayName,
        email: loginUserRes?.email,
      };

      setloading(false);
      setuser(userObj);
      setisLoggedin(true);
      setshowSignin(false);
      toast.success("Login Success");
    } catch (error) {
      setloading(false);
      toast.error(error?.message);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-xl border border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
      <form onSubmit={handleLoginSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 text-white"
              placeholder="Enter your email"
              name="email"
              value={login.email}
              onChange={handleLoginChange}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="password"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 text-white"
              placeholder="Enter your password"
              name="password"
              value={login.password}
              onChange={handleLoginChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
        >
          Sign In
          {loading && <span className="loader"></span>}
        </button>
      </form>
    </div>
  );
};

export default Sigin;
