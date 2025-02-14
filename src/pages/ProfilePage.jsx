import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutUserAction } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProfilePage() {
  const { userData } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    let userAfirmation = confirm("Are you sure you want to logout?");
    if (userAfirmation) {
      setTimeout(() => {
        navigate("/");
        dispatch(handleLogoutUserAction());
        toast.success("You've logged out!");
      }, 2500);
    }
  }

  return (
    <div className="px-[16px] bg-slate-100 flex flex-col md:flex-row items-center justify-start gap-[50px] py-[100px]">
      <img
        src={userData.image}
        alt="profile"
        className="w-[250px] h-[250px] rounded-full border-[6px] border-neutral-900 p-[3px] hover:border-cyan-700 transition-all duration-300"
      />
      <div className="bg-neutral-900 text-neutral-200 p-[50px] rounded-md flex flex-col items-start gap-[20px] w-full items-center md:items-start">
        <h3>First Name: {userData.firstName}</h3>
        <h3>Last Name: {userData.lastName}</h3>
        <h4>Email: {userData.email}</h4>
        <h4>Birth Date: {userData.birthDate}</h4>
        <h5>Gender: {userData.gender}</h5>
        <button
          className="bg-cyan-700 text-white py-[8px] px-[30px] rounded-lg hover:bg-cyan-800 transition-all duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
