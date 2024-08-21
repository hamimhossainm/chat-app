import { useFormik } from "formik";
import React from "react";
import { signUp } from "../../Validation/Validation";

const RegFormComp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: console.log("Submitted"),
    validationSchema: signUp,
  });
  return (
    <div>
      <h2 className="font-firaSans mb-4 text-2xl font-bold">
        Create Your <span className="text-orange-600">TalkFlow</span> Account
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="font-Trebuchet mb-2 w-full rounded-md border border-slate-400 px-2 py-3 outline-none"
        />
        {formik.errors.name && formik.touched.name && (
          <p className="mb-3 text-red-500">{formik.errors.name}</p>
        )}
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          type="text"
          name="email"
          placeholder="Enter Your Email"
          className="font-Trebuchet mb-2 w-full rounded-md border border-slate-400 px-2 py-3 outline-none"
        />
        {formik.errors.email && formik.touched.email && (
          <p className="mb-3 text-red-500">{formik.errors.email}</p>
        )}
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          name="password"
          placeholder="Enter Your Password"
          className="font-Trebuchet mb-2 w-full rounded-md border border-slate-400 px-2 py-3 outline-none"
        />
        {formik.errors.password && formik.touched.password && (
          <p className="mb-3 text-red-500">{formik.errors.password}</p>
        )}
        <button className="font-Trebuchet w-full rounded-md bg-slate-800 py-3 font-bold text-white">
          Sign Up
        </button>
      </form>
      <p className="font-Trebuchet mt-3 text-base text-slate-500">
        Already have an account ? Sign In
      </p>
    </div>
  );
};

export default RegFormComp;
