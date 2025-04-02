import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "./context/UserContext.jsx";
import FeedbackContext from "./context/FeedbackContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContext>
      <FeedbackContext>
        <App />
      </FeedbackContext>

      <ToastContainer />
    </UserContext>
  </BrowserRouter>
);
