import React from "react";
import FormComponent from "../components/FormComponent";

function RegisterPage() {
  return (
    <div className="conatiner mz-auto px-[16px] flex flex-col items-center py-[31px] gap-[15px] bg-lime-300 dark:bg-slate-900">
      <h1 className="text-3xl text-blue-600">Register Form</h1>
      <FormComponent />
    </div>
  );
}

export default RegisterPage;
