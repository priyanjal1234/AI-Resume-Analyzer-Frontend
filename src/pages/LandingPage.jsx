import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sigin from "../components/Sigin";
import Signup from "../components/Signup";
import { UserDataContext } from "../context/UserContext";
import UploadModal from "../components/UploadModal";

const LandingPage = () => {
  const [showSignUp, setshowSignUp] = useState(false);
  const [showSignin, setshowSignin] = useState(false);
  const [showUploadModal, setshowUploadModal] = useState(false)


  const renderAuthModal = () => {
    if (!showSignUp && !showSignin) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="w-full max-w-md mx-4">
          {showSignin && <Sigin setshowSignin = {setshowSignin} />}
          {showSignUp && <Signup setshowSignUp = {setshowSignUp} />}
          <button
            onClick={() => {
              setshowSignUp(false);
              setshowSignin(false);
            }}
            className="mt-4 text-gray-400 hover:text-white text-sm text-center w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar setshowSignUp={setshowSignUp} setshowSignin={setshowSignin} />
      <Hero setshowUploadModal = {setshowUploadModal}/>
      {renderAuthModal()}
      {showUploadModal && <UploadModal setshowUploadModal={setshowUploadModal} />}
    </div>
  );
};

export default LandingPage;
