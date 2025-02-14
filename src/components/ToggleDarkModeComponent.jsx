import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { handleDarkMode } from "../store/themeModeSlice";
import { IoLogoElectron } from "react-icons/io5";

function ToggleDarkModeComponent() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.themeModeStore);

  function toggleDarkMode() {
    dispatch(handleDarkMode(!darkMode));
  }

  return (
    <div onClick={toggleDarkMode} className="cursor-pointer">
      {darkMode ? (
        <IoLogoElectron size={45} color="white" />
      ) : (
        <IoLogoElectron size={45} color="black" />
      )}
    </div>
  );
}

export default ToggleDarkModeComponent;
