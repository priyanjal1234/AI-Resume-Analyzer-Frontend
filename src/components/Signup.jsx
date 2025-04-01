import { Lock, Mail, User } from "lucide-react";
import React, { useContext, useState } from "react";
import userService from "../services/User";
import { toast } from "react-toastify";
import { UserDataContext } from "../context/UserContext";

const Signup = ({setshowSignUp}) => {
  const [register, setregister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);

  let {  setuser,setisLoggedin } = useContext(UserDataContext);

  function handleRegisterChange(e) {
    let { name, value } = e.target;
    setregister((prev) => ({ ...prev, [name]: value }));
  }

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    setloading(true);

    try {
      const registerRes = await userService.registerUser(
        register.name,
        register.email,
        register.password
      );
      const userObj = {
        name: registerRes?.displayName,
        email: registerRes?.email
      }
      setloading(false);
      setuser(userObj);
      setisLoggedin(true)
      setshowSignUp(false)
      toast.success("Registeration Successfull");
    } catch (error) {
      setloading(false);
      toast.error(error?.message);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-xl border border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
      <form onSubmit={handleRegisterSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 text-white"
              placeholder="Enter your name"
              name="name"
              required
              value={register.name}
              onChange={handleRegisterChange}
            />
          </div>
        </div>
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
              required
              value={register.email}
              onChange={handleRegisterChange}
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
              placeholder="Choose a password"
              name="password"
              required
              value={register.password}
              onChange={handleRegisterChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 flex items-center justify-center gap-3 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Sign Up
          {loading && <span className="loader"></span>}
        </button>
      </form>
    </div>
  );
};

export default Signup;
