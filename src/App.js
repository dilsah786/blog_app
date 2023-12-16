import logo from "./logo.svg";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Register from "./Auth/Register";
import Signup from "./Signup";
function App() {
  const notify = () =>
    toast.info("Wow so easy!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "info",
      theme: "colored",
      limit: 1,
    });

  return (
    <div>
      <Register />
    </div>
  );
}
export default App;
