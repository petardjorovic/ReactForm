import { useFormik } from "formik";
import { useEffect } from "react";
import { useRef } from "react";
import { FileParser } from "../utils/FileParser";
import * as Yup from "yup";

function FormComponent() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Image validation
  // size
  const KB = 1024;
  const MB = KB * 1024;
  // type
  const VALID_TYPE = ["image/png", "image/jpg", "image/jpeg"];

  const formik = useFormik({
    // 1. initialValues
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      image: "",
      birthDate: "",
    },

    // 2. validation YUP
    validationSchema: Yup.object({
      firstName: Yup.string().required(" is required!"),
      lastName: Yup.string().required(" is required!"),
      email: Yup.string().email(" is not valid").required(" is required!"),
      password: Yup.string().min(4).required(" is required"),
      confirmPassword: Yup.string().required(" is required"),
      gender: Yup.string().required(" is required"),
      birthDate: Yup.string().required(" is required"),
      image: Yup.mixed()
        .required(" is required")
        .test(
          "fileSize",
          "Image size must be under 2 MB",
          (value) => value.size < MB * 0.5
        )
        .test("fileType", "Wrong file type", (value) =>
          VALID_TYPE.includes(value.type)
        ),
    }),

    // 3. onSubmit
    onSubmit: (values) => {
      console.log(values);
      FileParser(values.image)
        .then((res) => console.log({ ...values, image: res }))
        .catch((err) => console.log(err));
      // send to backend
      //   RegisterService.addUser({...values,image:res})
      //   .then(res => {
      //     Navigate("/login")
      //   }).catch(err => console.log(err))
      formik.resetForm();
    },
  });

  const showErrors = (inputName) =>
    formik.errors[inputName] &&
    formik.touched[inputName] &&
    formik.errors[inputName];

  return (
    <form
      className="bg-slate-300 w-[500px] flex flex-col gap-[10px] p-[15px] rounded-lg"
      onSubmit={formik.handleSubmit}
    >
      {/* firstName */}
      <div className="flex flex-col">
        <label
          htmlFor="firstName"
          className={`text-sm text-slate-800 ${
            showErrors("firstName") ? "text-red-600" : ""
          }`}
        >
          First Name
          <span className="text-sm text-red-600">
            {showErrors("firstName")}
          </span>
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          className="outline-none px-[16px] py-[8px] rounded-lg"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          ref={inputRef}
        />
      </div>
      {/* lastName */}
      <div className="flex flex-col">
        <label
          htmlFor="lastName"
          className={`text-sm text-slate-800 ${
            showErrors("lastName") ? "text-red-600" : ""
          }`}
        >
          Last Name
          <span className="text-sm text-red-600">{showErrors("lastName")}</span>
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          className="outline-none px-[16px] py-[8px] rounded-lg"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </div>
      {/* email */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className={`text-sm text-slate-800 ${
            showErrors("email") ? "text-red-600" : ""
          }`}
        >
          Email
          <span className="text-sm text-red-600">{showErrors("email")}</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="outline-none px-[16px] py-[8px] rounded-lg"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      {/* password */}
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className={`text-sm text-slate-800 ${
            showErrors("password") ? "text-red-600" : ""
          }`}
        >
          Password
          <span className="text-sm text-red-600">{showErrors("password")}</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="outline-none px-[16px] py-[8px] rounded-lg"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      {/* confirmPassword */}
      <div className="flex flex-col">
        <label
          htmlFor="confirmPassword"
          className={`text-sm text-slate-800 ${
            showErrors("confirmPassword") ? "text-red-600" : ""
          }`}
        >
          Confirm Password
          <span className="text-sm text-red-600">
            {showErrors("confirmPassword")}
          </span>
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          className="outline-none px-[16px] py-[8px] rounded-lg"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
      </div>
      {/* gender */}
      <div className="flex flex-col">
        <label
          htmlFor="gender"
          className={`text-sm text-slate-800 ${
            showErrors("gender") ? "text-red-600" : ""
          }`}
        >
          Gender
          <span className="text-sm text-red-600">{showErrors("gender")}</span>
        </label>
        <select
          name="gender"
          id="gender"
          className="outline-none px-[16px] py-[8px] rounded-lg"
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <option value="" defaultChecked>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      {/* image */}
      <div className="flex flex-col">
        <label
          htmlFor="image"
          className={`text-sm text-slate-800 ${
            showErrors("image") ? "text-red-600" : ""
          }`}
        >
          Image
          <span className="text-sm text-red-600">{showErrors("image")}</span>
        </label>
        <input
          type="file"
          name="image"
          id="image"
          className="outline-none px-[16px] py-[8px] rounded-lg"
          onChange={(e) => {
            formik.setFieldValue(e.target.name, e.target.files[0]);
          }}
        />
      </div>
      {/* birthDate */}
      <div className="flex flex-col">
        <label
          htmlFor="birthDate"
          className={`text-sm text-slate-800 ${
            showErrors("birthDate") ? "text-red-600" : ""
          }`}
        >
          Birth Date
          <span className="text-sm text-red-600">
            {showErrors("birthDate")}
          </span>
        </label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          placeholder="Birth Date"
          className="outline-none px-[16px] py-[8px] rounded-lg"
          value={formik.values.birthDate}
          onChange={formik.handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-[16px] py-[8px] rounded-lg hover:bg-green-600 transition-all duration-300"
      >
        Register Me
      </button>
    </form>
  );
}

export default FormComponent;
