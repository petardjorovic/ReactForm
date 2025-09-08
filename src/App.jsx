import { Outlet } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Navbarcomponent from "./components/Navbarcomponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { restoreUserAction } from "./store/userSlice";
import { ToastContainer } from "react-toastify";
import axios from "axios";

// // za tokene
// axios.interceptors.request.use(config => {
//   let user = localStorage.getItem()
//   if(localStorage.getItem("reduz_user"))
// })

function App() {
  const { darkMode } = useSelector((state) => state.themeModeStore);
  const dispatch = useDispatch();
  // Hello from dev branch

  useEffect(() => {
    if (localStorage.hasOwnProperty("redux_user")) {
      let user = JSON.parse(localStorage.getItem("redux_user"));
      dispatch(restoreUserAction(user));
    }
  }, []);

  return (
    <div className={`container mx-auto ${darkMode ? "dark" : ""}`}>
      <Navbarcomponent />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
