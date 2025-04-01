import React, { useContext } from "react";
import { BrainCircuit } from "lucide-react";
import { UserDataContext } from "../context/UserContext";
import userService from "../services/User";
import { toast } from "react-toastify";

const Navbar = ({ setshowSignUp, setshowSignin }) => {
  let { isLoggedin, user, setisLoggedin, setuser } =
    useContext(UserDataContext);

  async function handleLogout() {
    try {
      await userService.logout();
      setisLoggedin(false);
      setuser({});
      toast.success("Logout Success");
    } catch (error) {
      toast.error(error?.message);
    }
  }

  return (
    <nav className="fixed w-full top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">ResumeAI</span>
        </div>
        {!isLoggedin ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setshowSignUp(true);
                setshowSignin(false);
              }}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <span>Sign up</span>
            </button>
            <button
              onClick={() => {
                setshowSignin(true);
                setshowSignUp(false);
              }}
              className="flex items-center space-x-2  px-4 py-2 rounded-lg transition-colors"
            >
              <span>Sign in</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="w-[40px] h-[40px] bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">
                {user?.name?.split("")[0]}
              </span>
            </div>
            <span
              onClick={handleLogout}
              className="text-red-500 cursor-pointer"
            >
              Logout
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
